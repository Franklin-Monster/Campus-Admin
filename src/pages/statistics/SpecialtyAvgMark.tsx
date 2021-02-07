import React, { FC, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { speSelectTermoptions, speClassData } from './help'
import './css/specialty-avg-mark'
import ReactEcharts from 'echarts-for-react'
import { Cascader } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

const SpecialtyAvgMark: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const speEchartsRef = useRef()
    const onInsAvgMarkChartClick = () => {
        props.history.push('/studentmarkwithonline')
    }

    // 监听下拉框改变
    const onSelectChange = (value: any) => {
        let tempArr: number[] = []
        speClassData.forEach((item) => {
            if (item.name === value[0]) {
                // @ts-ignore
                speEchartsRef.current.props.option.xAxis.data = item.data
                for (let i = 0; i < item.data.length; i++) {
                    tempArr.push(Math.round(Math.random() * (85 - 65) + 65))
                }
            }
        })
        // @ts-ignore
        speEchartsRef.current.props.option.series[0].data = updateRandomData(tempArr)
        // @ts-ignore
        speEchartsRef.current.getEchartsInstance().setOption(speEchartsRef.current.props.option)
    }

    // 更新随机分数
    const updateRandomData = (arr?: number[]) => {
        if (arr instanceof Array) return arr
        return [82, 75, 80, 81, 85, 77, 78, 76, 82]
    }
    const getSpeAvgMarkOption = {
        color: ['#1890FF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: (param: any) => {
                return `<div>
                                课程: ${param[0].axisValue}
                                <br/>
                                平均分: ${param[0].data}分
                        </div>`
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['科技论文写作', 'IT项目管理课设', '信息系统分析课设',
                '文献检索', '信息管理专业英语', 'BIM应用管理',
                '信息分析与决策', '信息系统分析与设计', 'IT项目管理'],
            axisLabel: {
                interval: 0,
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            min: 60,
            max: 100,
            splitLine: {
                show: false
            }

        },
        series: [{
            // data: [82, 75, 80, 81, 85, 77, 78, 76, 82],
            data: updateRandomData(),
            type: 'bar',
        }]

    }

    const displayRender = (label: any) => {
        return label[label.length - 1];
    }
    return (
        <div id="SpecialtyAvgMark">
            <div className="spe-header">
                <LeftOutlined style={{ color: '#1890FF' }} onClick={() => props.history.goBack()} />
                &nbsp; &nbsp;
                信息管理与信息系统专业2017级
                <Cascader
                    options={speSelectTermoptions}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onSelectChange}
                    defaultValue={["2019-2020-spr"]}
                    placeholder=""
                />
                课程平均分统计
            </div>
            <div className="spe-body">
                <div className="rank-content">
                    <ReactEcharts
                        style={{ width: '100%', height: '500px' }}
                        notMerge={true}
                        option={getSpeAvgMarkOption}
                        onEvents={{
                            'click': onInsAvgMarkChartClick
                        }}
                        // @ts-ignore
                        ref={speEchartsRef}
                    />
                </div>
            </div>
            <div className="spe-footer">

            </div>
        </div>
    )
}

export default SpecialtyAvgMark