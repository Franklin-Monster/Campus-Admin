import React, { FC } from 'react'
import './css/enter-staff'
import { RouteComponentProps } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'
import { getStaffOption } from './help'
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

    return (
        <div id="EnterStaff">
            <div className="staff-header">
                信息管理与信息系统
            </div>
            <div className="staff-body">
                <ReactEcharts
                    style={{ width: '100%', height: '600px' }}
                    notMerge={true}
                    option={getStaffOption()}
                    onEvents={onEchartsEvents}
                />
            </div>
            <div className="staff-footer">

            </div>

        </div>
    )
}

export default EnterStaff