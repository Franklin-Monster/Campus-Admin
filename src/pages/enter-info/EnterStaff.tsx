import React, { FC } from 'react'
import './css/enter-staff'
import { RouteComponentProps } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'
// import * as echarts from 'echarts';

// // props
// interface InitProps {
//     name: string
// }
// type StaffProps = InitProps & RouteComponentProps

const EnterStaff: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const onChartClick = (e: any) => {
        switch (e.dataIndex) {
            case 0: props.history.push('/student')
                break;
            case 1: props.history.push('/teacher')
                break;
        }
    }
    const onChartLegendselectchanged = () => {
        console.log(2)
    }
    const onEchartsEvents = {
        'click': onChartClick,
        'legendselectchanged': onChartLegendselectchanged
    }
    const getOption = () => {
        return {
            title: {
                text: '人数分布',
                left: 'center',
                textStyle: {
                    fontSize: 28
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    fontSize: 18
                },
            },
            series: [
                {
                    name: '人数分布',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 300, name: '学生' },
                        { value: 20, name: '教师' },
                    ],
                    textStyle: {
                        color: '#0b2b5e',
                        fontSize: 18
                    },

                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            textStyle: {
                                color: '#0b2b5e',
                                fontSize: 18
                            },

                        }
                    }
                }
            ]
        }
    }
    return (
        <div id="EnterStaff">
            <div className="staff-header">
                信息管理与信息系统
            </div>
            <div className="staff-body">
                <ReactEcharts
                    style={{ width: '100%', height: '600px' }}
                    notMerge={true}
                    option={getOption()}
                    onEvents={onEchartsEvents}
                />
            </div>
            <div className="staff-footer">

            </div>

        </div>
    )
}

export default EnterStaff