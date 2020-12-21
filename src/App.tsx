import React from 'react';
import {Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Sidebar from './sidebar';
import { ApolloProvider } from '@apollo/client';
import {client} from './shared/client'
import {Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Posts from './posts';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = (x: boolean) => {
    console.log(x)
    setCollapsed(x)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout style={{ minHeight:"100vh"}}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
          <Sidebar />
          </Sider>

          <Layout >
            <Header style={{ background: '#fff', padding: 0 }}> 대충 헤더 </Header>
            <Content >
              <Switch>
                <Route path="/posts">
                  <Posts/>
                </Route>
                <Route path="/users">
                  유저들
                </Route>
                <Route path="/">
                  루트
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              SNULife Admin
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </ApolloProvider>
  )
}

export default App;
