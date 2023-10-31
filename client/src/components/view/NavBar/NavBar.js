import { Layout, Menu, Dropdown, Button, Image } from 'antd';
import React from 'react';
import { MenuUnfoldOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { LOGO_SMALL } from '../../Items';

const { Header } = Layout;
const items = [
  {
    key: '1',
    label: (<a href="/list/tshirt">티셔츠</a>),
  },
  {
    key: '2',
    label: (<a href="/list/hood">후드</a>),
  },
  {
    key: '3',
    label: (<a href="/list/jean">청바지</a>),
  },
];

const menu_list = [
  {
    label: (<a href='/notice'>공지사항</a>),
    key: 'notice'
  }, {
    label: '베스트',
    key: 'best'
  }, {
    label: 'NEW',
    key: 'new'
  }
];

const NavBar = () => {

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a href='/'><Image
          width={200}
          src={LOGO_SMALL}
          preview={false}
        /></a>
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          arrow
        >
          <Button style={{ height: '80%', margin: '10px' }}>
            <MenuUnfoldOutlined />
            <a href='/'>전체 카테고리</a>
          </Button>
        </Dropdown>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menu_list}
        />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
          <Button type="default" shape="circle" icon={<ShoppingCartOutlined />} size='large' style={{ margin: '0 20px' }} />
          <Button type="default" shape="circle" icon={<UserOutlined />} size='large' href='/login' />
        </div>
      </Header>
    </Layout>
  )
}

export default NavBar
