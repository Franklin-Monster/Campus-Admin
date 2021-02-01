import React, { FC } from 'react'
import './css/college'

// component
import ListItem from '@c/ListItem'

const College: FC = () => {

    return (
        <div id="College">
            <div className="college-header">
                <div className="header-text">
                    <div className="text-name">
                        天津城建大学
                    </div>
                    <div className="text-englishname">
                        Tianjin Chengjian University
                    </div>
                </div>
                <div className="header-img">
                    <img src={require('./img/school-icon.jpg').default} alt="icon" />
                </div>
            </div>
            <div className="college-body">
                <div className="body-list">
                <div className="list-title">
                        学校信息
                    </div>
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
                        各级学院
                    </div>
                    <div className="ins-list">
                        <div className="ins-card">
                            <div className="card-title">
                                经济与管理学院
                        </div>
                            <div className="card-content">
                                <div className="card-item">
                                    <div className="item-front">
                                        负责人：
                                    </div>
                                    <div className="item-end">
                                        王老师
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="item-front">
                                        联系方式：
                                    </div>
                                    <div className="item-end">
                                        13888888888
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="college-footer">

            </div>
        </div>
    )
}

export default College