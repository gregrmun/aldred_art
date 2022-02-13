import React, { useEffect, useState } from "react";
import { 
    Layout,  
    Image, 
    Typography, 
    Space, 
    Button,
    Affix,
    Col,
    Row,
    } from 'antd';

import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import './product.css';

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;



const BigTreeProduct = () => {

    const history = useHistory();

    const handleBuyButtonPressed = () => {
        fetch("/api/config/")
        .then((result) => { return result.json(); })
        .then((data) => { 
            const stripe = Stripe(data.publicKey);

            fetch("/api/create-checkout-session/")
                .then((result) => { return result.json(); })
                .then((data) => { 
                    console.log(data);
                    return stripe.redirectToCheckout({sessionId: data.sessionId})
                })
                .then((res) => {
                    console.log(res);
                })
            });
        history.push("/api/create-checkout-session/");
    }

    return (

        <Layout className="layout">
                <Affix>
                    <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                        <NavbarStyled />
                    </Header>
                </Affix>
            <Content>
                <Col className="site-layout-content">
                    <Row>
                        Alred's Favourites
                    </Row>

                    <Row gutter={[24, 40]}>
                        <Col span={12} >
                        <Space direction="vertical" style={{width: 400, textAlign: 'center'}} >
                            <Image
                                width={400}
                                src={require('../../assets/artwork/BigTree.jpg')}
                            />
                            
                            <Title level={4}>
                                BigTree 
                            </Title>

                            <Text strong>
                                £499.99
                            </Text>
                            
                            <Button onClick={handleBuyButtonPressed} htmlType="submit" block>
                                Buy
                            </Button>        
                        </Space>
                        </Col>
                    </Row>
                </Col>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                <AAFooter/>
            </Footer>
        </Layout>
    )
}