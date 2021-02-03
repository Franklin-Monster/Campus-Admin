import React, { FC, useState } from 'react'
import './css/institute'

// component
import ListItem from '@c/ListItem'
import CardItem from '@c/CardItem'
import CollectionCreateForm from '@c/CollectionCreateForm'

// antd
import { PlusCircleTwoTone } from '@ant-design/icons'

const Institute: FC = () => {
    const [addBoxVisible, setAddBoxVisible] = useState<boolean>(false);
    const [specialty, setSpecialty] = useState<Array<
        {
            title: string,
            itemText: Array<Array<string>>
        }>>([{
            title: "信息管理与信息系统",
            itemText: [
                ['负责人', '刘老师'],
                ['联系方式', '13888888888'],
            ]
        }])

    const addSpecialty = (item: { title: string, director: string, phone: string }) => {
        const newIns = {
            title: item.title,
            itemText: [["负责人", item.director], ["联系方式", item.phone]]
        }
        setSpecialty(spe => [...spe, newIns])
        setAddBoxVisible(false);
    };

    return (
        <div id="Institute">
            <div className="institute-header">
                经济与管理学院
            </div>
            <div className="institute-body">
                <div className="body-list">
                    <div className="list-title">学院信息</div>
                    <div className="list-content">
                        <ListItem title="负责人：" content="李书记" />
                        <ListItem title="联系方式：" content="13888888888" />
                    </div>
                </div>
                <div className="body-specialty">
                    <div className="spe-title">
                        <div>院系专业</div>
                        <div className="spe-add" onClick={() => {
                            setAddBoxVisible(true);
                        }}>
                            添加&nbsp;
                            <PlusCircleTwoTone />
                        </div>
                    </div>
                    <div className="spe-list">
                        {
                            specialty.map((item, index) => {
                                return (
                                    <CardItem
                                        title={item.title}
                                        itemText={item.itemText}
                                        key={index}
                                    />
                                )
                            })
                        }
                        <CollectionCreateForm
                            visible={addBoxVisible}
                            onCreate={addSpecialty}
                            onCancel={() => {
                                setAddBoxVisible(false)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="institute-footer"></div>
        </div>
    )
}

export default Institute
