import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/student'
import { student1TableData, student2TableData, getGradeOption, getClassOption } from './help'
import ReactEcharts from 'echarts-for-react'
import { LeftOutlined } from '@ant-design/icons'
import { Table, Space, Button } from 'antd'

const Student: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [gradeVisible, setGradeVisible] = useState<boolean>(true)
    const [studentTableData, setStudentTableData] = useState<any>(student1TableData)
    const { Column } = Table
    const returnBack = () => {
        if (!gradeVisible) {
            setGradeVisible(true)
        }
        else {
            props.history.goBack()
        }
    }
    const enterStudent = () => {
        props.history.push('/enterstudent')
    }
    const onGradeChartClick = (e: any) => {
        setGradeVisible(false)
    }
    const onClassChartClick = (e: any) => {
        switch (e.dataIndex) {
            case 0: setStudentTableData(student1TableData)
                break;
            case 1: setStudentTableData(student2TableData)
                break;
        }
    }
    const onGradeEchartsEvents = {
        'click': onGradeChartClick,
    }
    const onClassEchartsEvents = {
        'click': onClassChartClick,
    }
    return (
        <div id="Student">
            <div className="student-header">
                <LeftOutlined style={{ color: '#1890FF' }} onClick={returnBack} /> &nbsp; &nbsp;学生
            </div>
            <div className="student-body">

                <div className="echarts-content">
                    <div className={`grade-echarts ${gradeVisible ? 'grade-echarts-in' : 'grade-echarts-out'}`}>
                        <ReactEcharts
                            style={{ width: '100%', height: '600px' }}
                            notMerge={true}
                            option={getGradeOption()}
                            onEvents={onGradeEchartsEvents}
                        />
                    </div>
                    <div className={`class-echarts ${gradeVisible ? 'class-echarts-out' : 'class-echarts-in'}`}>
                        <ReactEcharts
                            style={{ width: '100%', height: '600px' }}
                            notMerge={true}
                            option={getClassOption()}
                            onEvents={onClassEchartsEvents}
                        />
                    </div>
                </div>
                <div className="student-table">
                    {
                        !gradeVisible && (
                            <div className="student-table-content">
                                <div className="table-title">
                                    <span>学生列表</span>
                                    <Button type="primary" onClick={enterStudent}>添加学生</Button>
                                </div>
                                <Table dataSource={studentTableData}>
                                    <Column title="学号" dataIndex="address" key="1" />
                                    <Column title="姓名" dataIndex="firstName" key="2" />
                                    <Column title="性别" dataIndex="address" key="3" />
                                    <Column title="出生年月" dataIndex="age" key="4" />
                                    <Column title="住址" dataIndex="address" key="5" />
                                    <Column
                                        title="操作"
                                        key="6"
                                        render={() => (
                                            <Space size="middle">
                                                <span>编辑</span>
                                            </Space>
                                        )}
                                    />
                                </Table>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="student-footer"></div>
        </div>
    )
}

export default Student