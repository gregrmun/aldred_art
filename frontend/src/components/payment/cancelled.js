import React, { useState } from 'react';
import AAFooter from "../navigation/footer";
import { useHistory } from 'react-router-dom';
import { 
    Layout, 
    Breadcrumb, 
    Image, 
    Typography, 
    Space, 
    Button 
    } from 'antd';
import Navbar from '../navigation/header';

const { Header, Content, Footer } = Layout;

const Cancelled = () => {

    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    }

    return (

        <Layout className="layout">
            <Header>
                <Navbar className="navStyle"/>
            </Header>
        <Content>
            <Breadcrumb style={{ margin: 16}}>
                <Breadcrumb.Item>Payment</Breadcrumb.Item>
                <Breadcrumb.Item>Cancelled</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <h1>Payment Cancelled.</h1>
                <Space direction="vertical" style={{width: 200, textAlign: 'center'}}>
                    <Button onClick={goToHome} block>
                        Return Home
                    </Button>
                </Space>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            <AAFooter/>
        </Footer>
    </Layout>
    )
}

export default Cancelled;