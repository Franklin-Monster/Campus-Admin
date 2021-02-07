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
        tooltip: {
            formatter: (param: any) => {
                const data = param.data
                return `<div>
                                学院: ${data.name}
                                <br/>
                                人数: ${data.value}人
                        </div>`
            }
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
            },
            formatter: (param: any) => {
                return `<div>
                                学院: ${param[0].axisValue}学院
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
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         label: {
        //             backgroundColor: '#6a7985'
        //         }
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            formatter: (param: any) => {
                console.log(param)
                return `<div>
                                学院: ${param[0].axisValue}学院
                                <br/>
                                优秀率: ${String(param[0].value).split('.')[1]}%
                                <br/>
                                挂科率: ${String(param[1].value).split('.')[1]}%
                        </div>`
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
                    interval: 0,
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
const getInsAvgMarkOption = () => {
    return {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2017级', '2018级', '2019级', '2020级']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
            },
            data: ['工程管理', '工程造价', '信息管理', '房地产',
                '工商管理', '土地管理', '城市管理', '投资学']
        },
        yAxis: {
            type: 'value',
            min: 60,
            max: 100
        },
        series: [
            {
                name: '2017级',
                type: 'line',
                data: [82, 75, 88, 81, 85, 77, 78, 68]
            },
            {
                name: '2018级',
                type: 'line',
                data: [82, 78, 82, 77, 75, 70, 70, 72]
            },
            {
                name: '2019级',
                type: 'line',
                data: [70, 72, 75, 80, 81, 85, 70, 76]
            },
            {
                name: '2020级',
                type: 'line',
                data: [75, 80, 81, 85, 70, 72, 75, 82]
            }
        ]
    }
}

const getStuScatterOption = () => {
    return {
        xAxis: {
            min: 0,
            max: 90,
            name: '平均在线时长（90min）',
        },
        yAxis: {
            min: 0,
            max: 100,
            name: '课程分数',
        },
        tooltip: {
            formatter: (param: any) => {
                const data = param.data
                return `<div>
                                每节课平均在线时长: ${data[0]}min
                                <br/>
                                课程分数: ${data[1]}分
                        </div>`
            }
        },
        series: [{
            symbolSize: 20,
            data: [
                [65, 87],
                [45, 67],
                [66, 56],
                [43, 83],
                [76, 83],
                [54, 76],
                [43, 61],
                [65, 53],
                [24, 56],
                [54, 79],
                [44, 72],
                [86, 87],
                [52, 75],
                [23, 65],
                [15, 45],
                [43, 76],
                [46, 92],
                [63, 69],
                [77, 94],
                [13, 85],
                [78, 81],
                [58, 54],
                [64, 67],
                [56, 66],
                [66, 56],
                [66, 83],
                [76, 61],
                [78, 76],
                [43, 61],
                [79, 76],
                [8, 56],
                [54, 79],
                [64, 72],
                [66, 87],
                [5, 34],
                [27, 65],
                [55, 88],
                [43, 86],
                [66, 92],
                [68, 79],
            ],
            type: 'scatter'
        }]
    }
}
const speSelectTermoptions = [
    {
        value: '2017-2018-aut',
        label: '2017-2018学年秋',
    },
    {
        value: '2017-2018-spr',
        label: '2017-2018学年春',
    },
    {
        value: '2018-2019-aut',
        label: '2018-2019学年秋',
    },
    {
        value: '2018-2019-spr',
        label: '2018-2019学年春',
    },
    {
        value: '2019-2020-aut',
        label: '2019-2020学年秋',
    },
    {
        value: '2019-2020-spr',
        label: '2019-2020学年春',
    },
    {
        value: '2020-2021-aut',
        label: '2020-2021学年秋',
    },
    {
        value: '2020-2021-spr',
        label: '2020-2021学年春',
    },
]


const speClassData = [
    {
        name: '2017-2018-aut',
        data: ['管理学原理', '思修', '大学英语（1）', '高等数学A（1）',
            '体育（1）', '形势与政策（1）', '大学计算机基础', '高级程序设计语言C']
    },
    {
        name: '2017-2018-spr',
        data: ['工程图学C', '概率论', '中国近现代史纲要', '数据结构与数据库（1）',
            '数据库课设', '大学英语（2）', '高等数学A（2）', '体育（2）']
    },
    {
        name: '2018-2019-aut',
        data: ['经济学', '应用统计学', '线性代数', '马克思主义基本原理概论', '数据库课设',
            '面向对象应用程序设计', '管理信息系统A', '数据结构与数据库（2）', 'SPSS综合实训',
            '大学英语（3）', '体育（3）', '形势与政策（2）']
    },
    {
        name: '2018-2019-spr',
        data: ['会计学原理', '工程建设管理概论', '信息技术基础', '毛概',
            '工程经济学A', '工程经济学课程设计', '信息网络技术', '研讨课（2）',
            '大学英语（4）', '体育（4）']
    },
    {
        name: '2019-2020-aut',
        data: ['运筹学课设', '信息系统开发课设', '信息资源管理', '数据挖掘课设', '系统工程与运筹学',
            '信息经济学', '数据仓库与数据挖掘', '企业资源计划', '信息系统开发技术A',
            '大学英语（4）', '体育（4）']
    },
    {
        name: '2019-2020-spr',
        data: ['科技论文写作', 'IT项目管理课设', '信息系统分析课设',
            '文献检索', '信息管理专业英语', 'BIM应用管理',
            '信息分析与决策', '信息系统分析与设计', 'IT项目管理']
    },
    {
        name: '2020-2021-aut',
        data: ['网络信息安全', '信息检索实训', '形势与政策（4）']
    },
    {
        name: '2020-2021-spr',
        data: ['毕业实习', '毕业设计']
    },
]
export {
    getInsStudentCountOption,
    getAvgMarkOption,
    getAvgRateOption,
    getInsAvgMarkOption,
    getStuScatterOption,
    speSelectTermoptions,
    speClassData
}