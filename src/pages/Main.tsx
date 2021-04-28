import React, { useState, FC } from 'react'
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom'
import RouteIndex from '../logic/route/index'
import './main.scss'

// antd
import { Layout, Menu } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

// props
interface InitProps {
    name: string
}
type MainProps = InitProps & RouteComponentProps

const Main: FC<MainProps> = (props: MainProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onCollapse = (collapsed: boolean): void => {
        setCollapsed(collapsed)
    };

    return (
        <div id="Main">
            <Redirect push to="/statistics" />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"> </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item
                            key="1"
                            onClick={() => props.history.push('/statistics')}
                            icon={<PieChartOutlined />} >
                            统计信息
                         </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                         </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="录入系统">
                            <Menu.Item key="3" onClick={() => props.history.push('/entercollege')}>
                                学校
                            </Menu.Item>
                            <Menu.Item key="4" onClick={() => props.history.push('/institute')}>
                                学院
                            </Menu.Item>
                            <Menu.Item key="5" onClick={() => props.history.push('/specialty')}>
                                专业
                            </Menu.Item>
                            <Menu.Item key="6" onClick={() => props.history.push('/enterstaff')}>
                                人员
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined />} title="权限管理">
                            <Menu.Item key="7" onClick={() => props.history.push('/studentpermission')}>
                                学生
                            </Menu.Item>
                            <Menu.Item key="8" onClick={() => props.history.push('/teacherpermission')}>
                                教师
                            </Menu.Item>
                            <Menu.Item key="9" onClick={() => props.history.push('/apppermission')}>
                                应用
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                        <div className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}>
                            <RouteIndex />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        微校园
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(Main)