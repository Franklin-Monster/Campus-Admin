import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/teacher'
import { Table, Space, Button } from 'antd'
import { student1TableData } from './help'

const Teacher: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const { Column } = Table
    const enterTeacher = () => {
        props.history.push('/enterteacher')
    }
    return (
        <div id="Teacher">
            <div className="teacher-header">
                <span> 信息管理与信息系统专业教师</span>
                <Button type="primary" onClick={enterTeacher}>添加教师</Button>
            </div>
            <div className="teacher-body">
                <div className="teacher-table-content">
                    <Table dataSource={student1TableData}>
                        <Column title="工号" dataIndex="address" key="address" />
                        <Column title="姓名" dataIndex="firstName" key="firstName" />
                        <Column title="电话" dataIndex="age" key="age" />
                        <Column title="班主任" dataIndex="age" key="age" />
                        <Column title="课程" dataIndex="age" key="age" />
                        <Column
                            title="操作"
                            key="action"
                            render={() => (
                                <Space size="middle">
                                    <span>编辑</span>
                                </Space>
                            )}
                        />
                    </Table>
                </div>
            </div>
            <div className="teacher-footer">

            </div>
        </div>
    )
}

export default Teacher