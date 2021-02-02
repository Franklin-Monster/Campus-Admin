import React, { FC, useState } from 'react'
import './css/college'

// component
import ListItem from '@c/ListItem'
import CardItem from '@c/CardItem'
import CollectionCreateForm from '@c/CollectionCreateForm'

// antd
import { PlusCircleTwoTone } from '@ant-design/icons'

const College: FC = () => {
    const [addBoxVisible, setAddBoxVisible] = useState<boolean>(false);
    const [institute, setInstitute] = useState<Array<
        {
            title: string,
            itemText: Array<Array<string>>
        }>>([{
            title: "经济与管理学院",
            itemText: [
                ['负责人', '王老师'],
                ['联系方式', '13888888888'],
            ]
        }])

    const addInstitute = (item: { title: string, director: string, phone: string }) => {
        const newIns = {
            title: item.title,
            itemText: [["负责人", item.director], ["联系方式", item.phone]]
        }
        setInstitute(ins => [...ins, newIns])
        setAddBoxVisible(false);
    };

    return (
        <div id="College">
            <div className="college-header">
                <div className="header-text">
                    <div className="text-name">天津城建大学</div>
                    <div className="text-englishname">Tianjin Chengjian University</div>
                </div>
                <div className="header-img">
                    <img src={require('./img/school-icon.jpg').default} alt="icon" />
                </div>
            </div>
            <div className="college-body">
                <div className="body-list">
                    <div className="list-title">学校信息</div>
                    <div className="list-content">
                        <ListItem title="负责人：" content="李书记" />
                        <ListItem title="电话：" content="13888888888" />
                        <ListItem title="地址：" content="天津市西青区津静公路26号" />
                        <ListItem title="官网：" content="http://www.tcu.edu.cn" />
                        <ListItem title="地址：" content="天津市西青区津静公路26号" />
                    </div>
                </div>
                <div className="body-institute">
                    <div className="ins-title">
                        <div>各级学院</div>
                        <div className="ins-add" onClick={() => {
                            setAddBoxVisible(true);
                        }}>
                            添加&nbsp;
                            <PlusCircleTwoTone />
                        </div>
                    </div>
                    <div className="ins-list">
                        {
                            institute.map((item, index) => {
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
                            onCreate={addInstitute}
                            onCancel={() => {
                                setAddBoxVisible(false)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="college-footer"></div>
        </div>
    )
}

export default College
