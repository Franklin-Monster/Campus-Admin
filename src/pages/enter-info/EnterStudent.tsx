import React, { FC } from 'react'
import './css/enter-student'
import { formItemLayout, tailFormItemLayout } from './help'

// antd
import {
    Form,
    Input,
    Radio,
    Select,
    Button,
    message,
    DatePicker
} from 'antd'

const EnterStudent: FC = () => {
    // 表单相关方法
    const { Option } = Select;
    const [form] = Form.useForm()
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const onStudentTableFinish = (values: any) => {
        message.success('添加成功');
        console.log('Received values of form: ', values);
    };
    return (
        <div id="EnterStudent">
            <div className="enter-student-header">
                <div>请录入学生信息</div>
            </div>
            <div className="enter-student-body">
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
                        name="stu-number"
                        label="学号"
                        rules={[
                            {
                                required: true,
                                message: '请输入学生学号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="stu-name"
                        label="姓名"
                        rules={[
                            {
                                required: true,
                                message: '请输入学生姓名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="stu-gender"
                        label="性别"
                        rules={[
                            {
                                required: true,
                                message: '请输入学生性别',
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio value={0}>男</Radio>
                            <Radio value={1}>女</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="stu-birth"
                        label="出生年月"
                        rules={[
                            {
                                required: true,
                                message: '请选择出生年月',
                            },
                        ]}
                    >
                        <DatePicker picker="month" placeholder="请选择出生年月" />
                    </Form.Item>
                    <Form.Item
                        name="stu-phone"
                        label="联系方式"
                        rules={[{ required: true, message: '请输入学生联系方式' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} type="number" />
                    </Form.Item>
                    <Form.Item
                        name="stu-address"
                        label="住址"
                        rules={[
                            {
                                required: true,
                                message: '请输入学生住址',
                            },
                        ]}
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
            <div className="enter-student-footer"></div>
        </div>
    )
}
export default EnterStudent