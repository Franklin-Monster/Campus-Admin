import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './css/teacher-permission'
import {
    Form,
    Switch,
    Button
} from 'antd';
type SizeType = Parameters<typeof Form>[0]['size'];
const TeacherPression: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    return (
        <div id="TeacherPermission">
            <div className="teapre-header">
                <div className="header-title">教师权限</div>
            </div>
            <div className="teapre-body">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                >
                    <Form.Item label="是否自动上报出勤">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许修改题库">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许修改成绩">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="是否允许修改个人资料">
                        <Switch />
                    </Form.Item>
                </Form>
            </div>
            <div className="teapre-footer">
                <Button type="primary">保存</Button>
                <Button type="primary" danger>取消</Button>
            </div>
        </div>
    )
}

export default TeacherPression