const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
}
const getStaffOption = () => {
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
const getGradeOption = () => {
    return {
        title: {
            text: '年级分布',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item'
        },

        visualMap: {
            show: false,
            min: 60,
            max: 100,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 76, name: '2017级' },
                    { value: 68, name: '2018级' },
                    { value: 80, name: '2019级' },
                    { value: 70, name: '2020级' },
                ],
                roseType: 'radius',
                label: {
                    color: '#000'
                },
                labelLine: {
                    lineStyle: {
                        color: '#000'
                    },
                    smooth: 0.2,
                    length: 20,
                    length2: 20
                },
                itemStyle: {
                    color: '#1890FF',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: () => Math.random() * 200
            }
        ]
    }
}
const getClassOption = () => {
    return {
        title: {
            text: '2017班级人数分布',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item'
        },

        visualMap: {
            show: false,
            min: 30,
            max: 50,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 40, name: '信息1班' },
                    { value: 36, name: '信息2班' },
                ],
                roseType: 'radius',
                label: {
                    color: '#000'
                },
                labelLine: {
                    lineStyle: {
                        color: '#000'
                    },
                    smooth: 0.2,
                    length: 20,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: () => Math.random() * 200
            }
        ]
    }
}
const student1TableData = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const student2TableData = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
]

export {
    formItemLayout,
    tailFormItemLayout,
    getStaffOption,
    getGradeOption,
    getClassOption,
    student1TableData,
    student2TableData
}




