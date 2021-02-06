import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/institute-avg-mark'
import ReactEcharts from 'echarts-for-react'
import { getInsAvgMarkOption } from './help'

const InstituteAvgMark: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const onInsAvgMarkChartClick = () => {
        props.history.push('/specialtyavgmark')
    }
    return (
        <div id="InstituteAvgMark">
            <div className="ins-header">
                经济与管理学院2017级-2020级平均分统计
            </div>
            <div className="ins-body">
                <div className="rank-content">
                    <ReactEcharts
                        style={{ width: '100%', height: '500px' }}
                        notMerge={true}
                        option={getInsAvgMarkOption()}
                        onEvents={{
                            'click': onInsAvgMarkChartClick
                        }}
                    />
                </div>
            </div>
            <div className="ins-footer">

            </div>
        </div>
    )
}

export default InstituteAvgMark