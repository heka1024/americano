import {Menu} from "antd";
import {FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import 'antd/dist/antd.css';
import '../App.css'
export default function Sidebar({}) {


  return(
    <>
      <div className="App-logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={<span><UserOutlined /><span>User</span></span>}
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span><TeamOutlined /><span>Team</span></span>}
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <FileOutlined />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </>
  )
}