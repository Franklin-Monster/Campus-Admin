import echarts from 'echarts'

const getInsStudentCountOption = () => {
    return {
        legend: {
            top: 'bottom',
            show: false,
        },
        toolbox: {
            show: false,
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [50, 200],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 1048, name: '建筑学院' },
                    { value: 1680, name: '土木工程学院' },
                    { value: 1240, name: '能源与安全工程学院' },
                    { value: 830, name: '材料科学与工程学院' },
                    { value: 1888, name: '经济与管理学院' },
                    { value: 880, name: '环境与市政工程学院' },
                    { value: 804, name: '计算机与信息工程学院' },
                    { value: 1280, name: '控制与机械工程学院' },
                    { value: 1550, name: '地质与测绘学院' },
                    { value: 990, name: '城市艺术学院' },
                    { value: 640, name: '外国语学院' },
                    { value: 1120, name: '理学院' },
                    { value: 860, name: '马克思主义学院' },
                    { value: 1320, name: '国际教育学院' },
                ]
            }
        ]
    }
}
const getAvgMarkOption = () => {
    return {
        color: ['#1890FF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
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
            data: ['建筑', '土木', '能源', '材料', '经管',
                '环境', '计信', '控制', '地质', '城艺',
                '外语', '理学', '马克思', '国际',],
            axisLabel: {
                interval: 0,//横轴信息全部显示
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            min: 60,
            max: 90,
            splitLine: {
                show: false
            }

        },
        series: [{
            data: [82, 75, 80, 81, 85, 77, 78, 68, 70, 70, 72, 75, 77, 65],
            type: 'bar',
        }]
    }
}
const getAvgRateOption = () => {
    return {
        color: ['#80FFA5', '#00DDFF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['优秀率', '挂科率']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    interval: 0,//横轴信息全部显示
                },
                data: ['建筑', '土木', '能源', '材料', '经管',
                    '环境', '计信', '控制', '地质', '城艺',
                    '外语', '理学', '马克思', '国际']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '优秀率',
                type: 'line',

                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 191, 236)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.59, 0.53, 0.35, 0.66, 0.72,
                    0.63, 0.66, 0.52, 0.59, 0.67,
                    0.45, 0.54, 0.46, 0.12]
            },
            {
                name: '挂科率',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 221, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.38, 0.19, 0.45, 0.2, 0.12,
                    0.24, 0.24, 0.15, 0.08, 0.34,
                    0.25, 0.28, 0.32, 0.5]
            },


        ]
    }
}

export {
    getInsStudentCountOption,
    getAvgMarkOption,
    getAvgRateOption
}