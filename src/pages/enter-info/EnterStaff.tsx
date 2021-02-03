// import React, { FC } from 'react'
import * as React from "react";
import './css/enter-staff'

import ReactEcharts from 'echarts-for-react'
// import * as echarts from 'echarts';
const EnterStaff = () => {

    const getOption = () => {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
    return (
        <div id="EnterStaff">
            <div className="staff-header">
                信息管理与信息系统
            </div>

            <div className="staff-body">
                <ReactEcharts
                    style={{ width: '100%', height: '800px' }}
                    notMerge={true}
                    option={getOption()}
                />
            </div>
            <div className="staff-footer">

            </div>

        </div>
    )
}

export default EnterStaff