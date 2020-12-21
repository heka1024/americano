import React from 'react';
import {Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Sidebar from './sidebar';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = (x: boolean) => {
    console.log(x)
    setCollapsed(x)
  }

  return (
    <Layout style={{ minHeight:"100vh"}}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
      <Sidebar />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}> 대충 헤더 </Header>
        <Content>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          SNULife Admin
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App;
