import React from "react";
import { 
    Divider, 
    Layout, 
    Typography, 
    Button, 
    Form,
    Row, 
    Col, 
    Affix,
    Input,
    Space,
    } from 'antd';
import { useHistory } from 'react-router-dom';



import '../index.css';
import 'antd/dist/antd.css';
import '../portfolio/portfolio.css'

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import InstaCarousel from "../utils/instacarousel";

const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text, Link } = Typography;


const Clientwork = () => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  


    return (

        <Layout className="layout">
                
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>
                
            <Content>
                <Col className="site-layout-content">
                    <Col className="artworkBox" align="center" justify="center" >
                        <Row className="artworkHeaderContainer">
                            <Text className="headerText" style={{color: '#fff'}}>Client Work</Text>

                            <Divider />


                            <Text className="artworkText" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    {/* <Button type="ghost" onClick={goToBigTreeProduct}> */}
                                        <img
                                            className="artworkImage"
                                            src={require('../../assets/artwork/BigTree.jpg')}
                                        />
                                        
                                        <Text className="artworkText">
                                            "Big Tree"
                                        </Text>
                                    {/* </Button> */}
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/TropicanaMockup.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Tropicana" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/InnerChild.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Inner Child"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/SoulMates.jpg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Soul + Mates"
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/BigWave.jpeg')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Big Wave"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/TrevoseMockup.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Trevose Head" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>

                        <Row justify="center" style={{marginBottom: 30}}>
                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/EndlessShorebreak.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Endless Shorebreak"
                                    </Text>
            
                                </Space>
                            </Col>

                            <Col >
                                <Space direction="vertical" style={{textAlign: 'center'}} >
                                    <img
                                        className="artworkImage"
                                        src={require('../../assets/artwork/Mirage.png')}
                                    />
                                    
                                    <Text className="artworkText">
                                        "Mirage" 
                                    </Text>
            
                                </Space>
                            </Col>
                        </Row>


                    </Col>
                </Col>
            </Content>

            <Footer className="footerArtwork"> 
            <AAFooter/>
            </Footer>
        </Layout>
    );   
}

export default Clientwork;