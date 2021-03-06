import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/statistics'
import ReactEcharts from 'echarts-for-react'
import { getInsStudentCountOption, getAvgRateOption, getAvgMarkOption } from './help'

const Statistics: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const onAvgMarkChartClick = () => {
        props.history.push('/instituteavgmark')
    }

    return (
        <div id="Statistics">
            <div className="stat-header">
                天津城建大学
            </div>
            <div className="stat-body">
                <div className="ins-rank">
                    <div className="rank-title">
                        学院排行
                    </div>
                    <div className="rank-count">
                        <ReactEcharts
                            style={{ width: '100%', height: '500px' }}
                            notMerge={true}
                            option={getInsStudentCountOption()}
                        />
                        <div className="count-title">
                            学院人数统计
                        </div>
                    </div>
                    <div className="rank-content">
                        <div className="rank-item">
                            <ReactEcharts
                                style={{ width: '100%', height: '475px' }}
                                notMerge={true}
                                option={getAvgRateOption()}
                            />
                            <div className="item-title low-title">学院优秀率、挂科率统计</div>
                        </div>
                        <div className="rank-item">
                            <ReactEcharts
                                style={{ width: '100%', height: '500px' }}
                                notMerge={true}
                                option={getAvgMarkOption()}
                                onEvents={{
                                    'click': onAvgMarkChartClick
                                }}
                            />
                            <div className="item-title">学院平均分统计</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-footer"></div>
        </div>
    )
}

export default Statistics