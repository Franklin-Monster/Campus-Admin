import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/enter-teacher'
import { formItemLayout, tailFormItemLayout } from './help'
import { QuestionCircleOutlined } from '@ant-design/icons'

// antd
import {
    Form,
    Input,
    Button,
    message,
    Tooltip
} from 'antd'

const EnterTeacher: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    // 表单相关方法
    const [form] = Form.useForm()
    const onStudentTableFinish = (values: any) => {
        message.success('添加成功');
        console.log('Received values of form: ', values);
        props.history.push('/teacher')
    };
    return (
        <div id="EnterTeacher">
            <div className="enter-teacher-header">
                <div>请录入教师信息</div>
            </div>
            <div className="enter-teacher-body">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="add-student"
                    onFinish={onStudentTableFinish}
                    scrollToFirstError={true}
                    size="middle"
                    initialValues={{
                        prefix: '86',
                    }}
                >
                    <Form.Item
                        name="tea-number"
                        label="工号"
                        rules={[
                            {
                                required: true,
                                message: '请输入教师工号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="tea-name"
                        label="姓名"
                        rules={[
                            {
                                required: true,
                                message: '请输入教师姓名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="tea-phone"
                        label="电话"
                        rules={[
                            {
                                required: true,
                                message: '请输入教师电话',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="tea-class"
                        label={
                            <span>
                                课程&nbsp;
                    <Tooltip title="请输入教师所授课程，课程之间用逗号分隔">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        rules={[{ required: true, message: '请输入教师所授课程' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="tea-director"
                        label={
                            <span>
                                班主任&nbsp;
                    <Tooltip title="若该教师为班主任，请填写负责其班级">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            添加
                        </Button>
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            重置
                         </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="enter-teacher-footer"></div>
        </div>
    )
}
export default EnterTeacher