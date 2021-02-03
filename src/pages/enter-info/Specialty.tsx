import React, { FC, useState } from 'react'
import './css/specialty'

// component
import ListItem from '@c/ListItem'
import CardItem from '@c/CardItem'
import CollectionCreateForm from '@c/CollectionCreateForm'

// antd
import { PlusCircleTwoTone } from '@ant-design/icons'

const Specialty: FC = () => {
    const [addBoxVisible, setAddBoxVisible] = useState<boolean>(false);
    const [classes, setClasses] = useState<Array<
        {
            title: string,
            itemText: Array<Array<string>>
        }>>([{
            title: "17信息1班",
            itemText: [
                ['负责人', '刘老师'],
                ['联系方式', '13888888888'],
            ]
        }])

    const addClass= (item: { title: string, director: string, phone: string }) => {
        const newIns = {
            title: item.title,
            itemText: [["负责人", item.director], ["联系方式", item.phone]]
        }
        setClasses(classes => [...classes, newIns])
        setAddBoxVisible(false);
    };

    return (
        <div id="Specialty">
            <div className="specialty-header">
                信息管理与信息系统
            </div>
            <div className="specialty-body">
                <div className="body-list">
                    <div className="list-title">专业信息</div>
                    <div className="list-content">
                        <ListItem title="负责人：" content="刘老师" />
                        <ListItem title="联系方式：" content="13888888888" />
                    </div>
                </div>
                <div className="body-institute">
                    <div className="class-title">
                        <div>班级</div>
                        <div className="class-add" onClick={() => {
                            setAddBoxVisible(true);
                        }}>
                            添加&nbsp;
                            <PlusCircleTwoTone />
                        </div>
                    </div>
                    <div className="class-list">
                        {
                            classes.map((item, index) => {
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
                            onCreate={addClass}
                            onCancel={() => {
                                setAddBoxVisible(false)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="specialty-footer"></div>
        </div>
    )
}

export default Specialty
