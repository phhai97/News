import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function HeaderComponent() {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    {/* {new Array(5).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })} */}
                </Menu>
            </Header>
        </Layout>
    );
}
