import React, { FC, useState } from 'react'
import './css/enter-college'

// antd
import {
    Form,
    Input,
    Tooltip,
    Select,
    Checkbox,
    Button,
    Upload,
    AutoComplete,
    message
} from 'antd';
import { QuestionCircleOutlined, InboxOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const EnterCollege: FC = () => {
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    // 表单相关方法
    const { Option } = Select;
    const [form] = Form.useForm();
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
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
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net', '.cn'].map(domain => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));
    const onFinish = (values: any) => {
        message.success('提交成功');
        setIsSubmit(true)
        console.log('Received values of form: ', values);
    };
    return (
        <div id="EnterCollege">
            <div className="enter-college-header">
                {
                    isSubmit || <div>请录入学校信息</div>
                }
            </div>
            <div className="enter-college-body">
                {
                    isSubmit ?
                        <div className="upload-success-body">
                            <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "36px" }} />&nbsp;&nbsp;&nbsp;
                        我们将会在三个工作日内处理您的申请，请留意短信及邮箱通知
                        </div>
                        : (
                            <Form
                                {...formItemLayout}
                                form={form}
                                name="register"
                                onFinish={onFinish}
                                initialValues={{
                                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                                    prefix: '86',
                                }}
                                scrollToFirstError
                                size="middle"
                            >
                                <Form.Item
                                    name="schhol-name"
                                    label="学校名称"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入学校名称',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="school-email"
                                    label="学校邮箱"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: '您的邮箱格式不合法',
                                        },
                                        {
                                            required: true,
                                            message: '请输入学校邮箱',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="schhol-address"
                                    label="学校地址"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入学校地址',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="school-icp"
                                    label="备案号"
                                    rules={[{ required: true, message: 'Please input your nickname!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="school-director"
                                    label="负责人"
                                    rules={[{ required: true, message: '请填写本校的负责人' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="school-phone"
                                    label="联系方式"
                                    rules={[{ required: true, message: '请输入学校联系方式' }]}
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item
                                    name="school-eleccode"
                                    label={
                                        <span>
                                            电子标识编号&nbsp;
                                <Tooltip title="此项为事业单位电子标识编号">
                                                <QuestionCircleOutlined />
                                            </Tooltip>
                                        </span>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入电子标识编号',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="school-postcode"
                                    label="邮政编码"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="school-website"
                                    label="学校官网"
                                >
                                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
                                        <Input />
                                    </AutoComplete>
                                </Form.Item>
                                <Form.Item
                                    name="school-password"
                                    label="登录密码"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入您的登录密码',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm-password"
                                    label="确认密码"
                                    dependencies={['school-password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: '请确认您的密码',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('school-password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('您两次输入的密码不一致!');
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item label="学校资质执照">
                                    <Form.Item
                                        name="dragger"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        noStyle>
                                        <Upload.Dragger name="files" action="/upload.do">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">请点击或拖动文件到这里上传</p>
                                            <p className="ant-upload-hint">支持单次或批量上传</p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) => value
                                                ? Promise.resolve() : Promise.reject('请您阅读并同意隐私协议')
                                        },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                        我同意 <a href="/#">校园帮隐私协议</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        )
                }

            </div>
            <div className="enter-college-footer">

            </div>
        </div>
    )
}

export default EnterCollege