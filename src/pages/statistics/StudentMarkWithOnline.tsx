import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'
import './css/student-mark-with-online'
import { getStuScatterOption } from './help'
import { LeftOutlined } from '@ant-design/icons'

const StudentMarkWithOnline: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    return (
        <div id="StudentMarkWithOnline">
            <div className="online-header">
                <LeftOutlined style={{ color: '#1890FF' }} onClick={() => props.history.goBack()} />
                &nbsp; &nbsp;IT项目管理课程 学生分数与平均在线时长关系散点图
            </div>
            <div className="online-body">
                <div className="scatter-content">
                    <ReactEcharts
                        style={{ width: '100%', height: '500px' }}
                        notMerge={true}
                        option={getStuScatterOption()}
                    />
                </div>
            </div>
            <div className="online-footer">

            </div>
        </div>
    )
}

export default StudentMarkWithOnline