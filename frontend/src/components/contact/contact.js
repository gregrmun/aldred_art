import React, { useState } from "react";
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
    } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
// import request from 'request';


import '../index.css';
import 'antd/dist/antd.css';
import '../contact/contact.css'

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import InstaCarousel from "../utils/instacarousel";

const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text, Link } = Typography;

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };


const Contact = () => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
      };

    // let url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
    // request.get(url + accessToken, function (err, res, body) {
    //             this.setState({ ...this.state, instagramData: JSON.parse(body).data })
    // })

    return (

        <Layout className="layout" >

        {/* <Affix offsetTop={0}> */}
            <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                <NavbarStyled />
            </Header>
        {/* </Affix> */}

        <Content>

            <Col className="site-layout-content">

                <Row className="headerContainer">
                    <Text className="headerText" style={{color: '#fff'}}>GET IN TOUCH</Text>
                </Row>

                <Col className="contactBox">

                    <Row justify="center" style={{flex: 1, marginBottom: 50, alignItems: 'center'}}>
                        <Col>
                            <img 
                                src={require('../../assets/home/BoardArt.png')} 
                                style={{
                                    height: 400,
                                    marginRight: 70,
                                }} 
                            />
                        </Col>

                        <Col align="left">
                            <Title level={3} className="subHeaderText" style={{color: '#444444'}}>
                                ALDRED ART
                            </Title>

                            <Paragraph className="contactText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Paragraph>

                            <Divider />
                            
                            <Paragraph className="contactBold">Address: <Link underline href="https://goo.gl/maps/PvWzeTvwnPv6GSr67" target="_blank" className="contactText" style={{color: '#606060'}}>25 St Johns Road, Newquay, Cornwall, TR7 1JT</Link></Paragraph>
                            <Paragraph className="contactBold">Email: <Link href="https://goo.gl/maps/PvWzeTvwnPv6GSr67" target="_blank" className="contactText" style={{color: '#606060'}}>hello@aldredart.com</Link></Paragraph>
                            <Paragraph className="contactBold">Phone: <Text className="contactText" >+44 7367 595154</Text></Paragraph>   
                        </Col>
                    </Row>
                </Col>

                <Row className="formBg" >
                    <Col 
                        className="formBox" 
                        align="left" 
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            validateMessages={validateMessages}
                            onFinish={onFinish}
                            name="enquiry"
                            size="large"
                            style={{
                                width: '70%',
                            }}
                            className="formFont"
                        >
                            <Form.Item 
                                name={['user', 'name']}
                                label="Name"  
                                required 
                                tooltip="This is a required field"
                            >
                                <Input placeholder="John Appleseed" />
                            </Form.Item>
                            <Form.Item 
                                name={['user', 'email']}
                                label="Email" 
                                rules={[{type: 'email'}]} 
                                required 
                            >
                                <Input placeholder="john.appleseed@gmail.com" />
                            </Form.Item>
                            <Form.Item 
                                name={['user', 'subject']}
                                label="Subject" 
                                required 
                            >
                                <Input placeholder="Commission" />
                            </Form.Item>
                            <Form.Item 
                                name={['user', 'message']}
                                label="Message" 
                                required 
                            >
                                <Input.TextArea placeholder="Hi Cam," />
                            </Form.Item>
                            <Form.Item>
                                <Button 
                                    block 
                                    type="text"
                                    htmlType="submit"
                                    style={{backgroundColor: '#75e0c6'}}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col className="formImg">
                        <img className="formImg" src={require('../../assets/home/ArtnBoards.jpg')}/>
                    </Col>
                </Row>
            </Col>
            {/* <Row className="contactBox">
                <InstaCarousel instagramData={this.state.instagramData} />
            </Row> */}
        </Content>

        <Footer className="footer"> 
            <AAFooter/>
        </Footer>

        </Layout>
    );   
}

export default Contact;