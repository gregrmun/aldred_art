import React from 'react';
import { 
    Layout,  
    Image, 
    Typography, 
    Space, 
    Button,
    Affix,
    Col,
    Row,
    Divider,
    } from 'antd';

import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import './services.css';
import '../index.css';

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const CustomSurfboards = () => {

    return (
        <Layout>
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>

            <Content>

            </Content>

            <Footer className="footer">
                <AAFooter />
            </Footer>
        </Layout>
    )

}

export default CustomSurfboards;