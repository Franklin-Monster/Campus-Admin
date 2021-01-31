import React, { useState, FC } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RouteIndex from '../logic/route/index'
import './main.scss'

// antd
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// props
interface InitProps { }
type MainProps = InitProps & RouteComponentProps;

const Main: FC<MainProps> = (props: MainProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed: boolean): void => {
        setCollapsed(collapsed)
    };

    return (
        <div id="Main">
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"> </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            统计信息
                         </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                         </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="录入系统">
                            <Menu.Item key="3" onClick={() => props.history.push('/entercollege')}>学校</Menu.Item>
                            <Menu.Item key="4" onClick={() => props.history.push('/enterteacher')}>教师</Menu.Item>
                            <Menu.Item key="5" onClick={() => props.history.push('/enterstudent')}>学生</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="组织架构">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            权限管理
                       </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <RouteIndex />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(Main)