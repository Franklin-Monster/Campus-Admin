import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/student-permission'
import {
    Form,
    Switch,
    Button
} from 'antd';
type SizeType = Parameters<typeof Form>[0]['size'];
const StudentPression: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size)
    };
    return (
        <div id="StudentPermission">
            <div className="stupre-header">
                <div className="header-title">学生权限</div>
            </div>
            <div className="stupre-body">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                >
                    <Form.Item label="是否允许设置昵称">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许屏蔽教师信息">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许跨级访问教师">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许修改个人资料">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许退出课程群">
                        <Switch />
                    </Form.Item>
                </Form>
            </div>
            <div className="stupre-footer">
                <Button type="primary">保存</Button>
                <Button type="primary" danger>取消</Button>
            </div>
        </div>
    )
}

export default StudentPression