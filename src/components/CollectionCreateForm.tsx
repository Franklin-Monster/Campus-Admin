import React, { FC } from 'react';
import { Modal, Form, Input } from 'antd';

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: { title: string, director: string, phone: string }) => void;
    onCancel: () => void;
}

const CollectionCreateForm: FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="添加新学院"
            okText="添加"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"

            >
                <Form.Item
                    name="title"
                    label="学院名称"
                    rules={[{ required: true, message: '请添加学院名称' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="director"
                    label="负责人"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="联系方式"
                >
                    <Input />
                </Form.Item>

            </Form>
        </Modal>
    );
};
export default CollectionCreateForm