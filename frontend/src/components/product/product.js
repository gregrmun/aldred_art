import React, { useEffect, useState } from "react";
import { 
    Layout,  
    Typography, 
    Space, 
    Button,
    Col,
    Row,
    Menu,
    Dropdown,
    } from 'antd';

import { 
    DownOutlined,
    ShoppingCartOutlined
     } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import './product.css';
import '../index.css';

const { Header, Content, Footer } = Layout;
const { Text, Paragraph } = Typography;
const { SubMenu } = Menu;


const BigTreeProduct = () => {

    const history = useHistory();

    const images = [
        {
          original: require('../../assets/artwork/BigTree.jpg'),
          thumbnail: require('../../assets/artwork/BigTree.jpg'),
          originalWidth: 300,
          thumbnailWidth: 300,
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    const ProductMenu = () => {

        return (
            <Menu>
                <SubMenu title="Paper">
                    <Menu.Item>18x18</Menu.Item>
                    <Menu.Item>20x20</Menu.Item>
                </SubMenu>
                <SubMenu title="Canvas">
                    <Menu.Item>18x18</Menu.Item>
                    <Menu.Item>20x20</Menu.Item>
                </SubMenu>
                <SubMenu title="Rolled">
                    <Menu.Item>18x18</Menu.Item>
                    <Menu.Item>20x20</Menu.Item>
                </SubMenu>
                <SubMenu title="Metal">
                    <Menu.Item>18x18</Menu.Item>
                    <Menu.Item>20x20</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }

    return (

        <Layout className="layout">
                
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>
                
            <Content>
                <Col className="site-layout-content">
                    <Row className="productBox" align="center">
                        <Col style={{ marginRight: 40}}>
                            <ImageGallery
                                items={images}
                                showNav={false}
                                showPlayButton={false}
                            />
                        </Col>
                        <Col style={{marginRight: 50}}>
                            
                            <Space direction="vertical" size={50}>
                                <Text className="productTitle" >"Big Tree"</Text>

                                <Paragraph className="productText" >
                                    Sky and shorebreak detonate.
                                </Paragraph>
                            </Space>

                            <Paragraph className="productText">
                                <ul type="disc">
                                    <li>
                                        Artist's signature on the front
                                    </li>
                                    <li>
                                        Made in Cornwall, UK
                                    </li>
                                    <li>
                                        Shipped to your door, ready to frame or hang
                                    </li>
                                </ul>
                            </Paragraph>

                            <Space direction="vertical" size={10}>
                                <Dropdown overlay={ProductMenu}>
                                    <Button className="buttonText">
                                        Sizes <DownOutlined />
                                    </Button>
                                </Dropdown>

                                <Button className="addToCartButton">
                                        ADD TO CART <ShoppingCartOutlined />
                                </Button>
                            </Space>
                        </Col>
                    </Row>

                    <Row className="moreBox" align="center">

                        <Col align="center">
                            <Paragraph className="productText" >
                                MORE ARTWORK
                            </Paragraph>

                            <Row>
                                <Col>
                                    <Space direction="vertical" style={{textAlign: 'center'}} >
                                        <img
                                            className="moreImage"
                                            src={require('../../assets/artwork/TropicanaMockup.png')}
                                        />
                                        
                                        <Text className="moreText">
                                            "Tropicana" 
                                        </Text>                                 
                                    </Space>
                                </Col>

                                <Col>
                                    <Space direction="vertical" style={{textAlign: 'center'}} >
                                        <img
                                            className="moreImage"
                                            src={require('../../assets/artwork/TropicanaMockup.png')}
                                        />
                                        
                                        <Text className="moreText">
                                            "Tropicana" 
                                        </Text>                                 
                                    </Space>
                                </Col>

                                <Col>
                                    <Space direction="vertical" style={{textAlign: 'center'}} >
                                        <img
                                            className="moreImage"
                                            src={require('../../assets/artwork/TropicanaMockup.png')}
                                        />
                                        
                                        <Text className="moreText">
                                            "Tropicana" 
                                        </Text>                                 
                                    </Space>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Content>

            <Footer className="footerProduct">
                <AAFooter/>
            </Footer>
        </Layout>
    )
}

export default BigTreeProduct;