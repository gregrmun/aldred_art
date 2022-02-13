import React from "react";
import { 
    Divider, 
    Layout, 
    Typography, 
    Button, 
    Collapse, 
    Row, 
    Col, 
    Affix 
    } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


import '../index.css';
import 'antd/dist/antd.css';
import '../faqs/faqs.css'

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";

const { Panel } = Collapse;


const { Header, Footer, Content } = Layout;

const { Title, Paragraph, Text, Link } = Typography;


const Faqs = (props) => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  

    return (
        <Layout className="layout" >

            
                <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                    <NavbarStyled />
                </Header>
           
          
            <Content>
    
                <Col className="site-layout-content">

                    <Col justify="center" align="center" style={{flexDirection: 'row'}}>
                        <Row className="faqheaderContainer">
                            <Title className="faqHeaderText">FREQUENTLY ASKED QUESTIONS</Title>
                        </Row>

                        <Divider />
                    </Col>
    
                    <Col className="faqBox" style={{marginLeft: 50, marginRight: 50}}>

    

                        <Row justify="center">
                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText">
                                    DO YOU OFFER CUSTOM SIZES, COLOR SCHEMES OR COMMISSIONS?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian"
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                >
                                    <Panel header="Prints" key="1" className="panel">
                                        <p className="accordianText">Each and every piece can be customized with a unique size or color scheme. Some size limitations may apply for wood prints.</p>
                                    </Panel>
                                    <Panel header="Sculptures" key="2" className="panel">
                                        <p className="accordianText">Custom commissioned wood wall sculptures along with current works for sale can be built at almost any custom size as well as any custom color scheme. Shaun is happy to work with you and build your desired piece, providing renderings of what the piece will look like before the build. Feel free to reach out by phone or email.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText">
                                    WHAT MATERIAL DO YOU OFFER YOUR PRINTS ON?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian" 
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                >
                                    <Panel header="Rolled Canvas" key="1" className="panel">
                                        <p className="accordianText">Most affordable print option available. Once received, Rolled Canvas prints can be framed or stretched. Free Shipping – US Only.</p>
                                    </Panel>
                                    <Panel header="Gallery Canvas Wrap" key="2" className="panel">
                                        <p className="accordianText">Canvas Gallery Wraps are printed directly onto canvas material. The print is then wrapped around a 1½” stretcher frame, and finished with hanging hardware. Most affordable print option that is ready to hang upon delivery.</p>
                                    </Panel>
                                    <Panel header="Wood" key="3" className="panel">
                                        <p className="accordianText">Wood prints are printed directly onto 3/4″ thick, White Birch plywood. The unique and beautiful wood texture shows through the surface of the print, creating a unique skyline or water effect in each design. The colors are slightly diluted, giving the print a warm and natural look and feel. Each wood print is unique and no two prints are alike. We use the best grade plywood to avoid any wood defects.</p>
                                    </Panel>
                                    <Panel header="Metal" key="4" className="panel">
                                        <p className="accordianText">Now offering New Metal prints. Colors are vibrant and the luminescence is breathtaking. Detail and resolution are unsurpassed. Comes ready to hang.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                        </Row>

                        <Row justify="center" >
                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText">
                                    HOW MUCH IS SHIPPING?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian" 
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                >
                                    <Panel header="United States" key="1" className="panel">
                                        <p className="accordianText">For a limited time, Sculptures and Prints ship for Free for all 50 states in the US.</p>
                                    </Panel>
                                    <Panel header="International" key="2" className="panel">
                                        <p className="accordianText">All international orders shipping costs vary by country. Size and weight of each Wood Sculpture or Print can dramatically change pricing. Most affordable shipping route for a Print is to order a Rolled Canvas. The print will come rolled in a tube which eliminates the need for a large box. You can then take the print locally to get framed or stretched. Feel free to contact us as we are happy to provide more information along with a quote.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText">
                                    DO YOU OFFER UNIQUE WALL LAYOUTS?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian" 
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                >
                                    <Panel header="Prints" key="1" className="panel">
                                        <p className="accordianText">Almost every wave print design has available layout options including Vertical, Horizontal, and Triptych. Images below for reference. </p>
                                    </Panel>
                                    <Panel header="Sculptures" key="2" className="panel">
                                        <p className="accordianText">Sculptures can be customized to any layout shape or size desired.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                        </Row>

                        <Row justify="center" style={{marginBottom: 50}}>
                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText">
                                    WHERE CAN I SEE YOUR WORK IN PERSON?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian" 
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                    >
                                    <Panel header="Kernow" key="1" className="panel">
                                        <p className="accordianText">For a limited time, Sculptures and Prints ship for Free for all 50 states in the US.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                            <Col className="colDimensions">
                                <Title level={3} className="subHeaderText" >
                                    DO YOU OFFER ARTWORK THAT I CAN HANG OUTDOORS?
                                </Title>
                                <Collapse 
                                    accordion 
                                    className="accordian" 
                                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
                                    expandIconPosition="right"
                                    ghost
                                >
                                    <Panel header="Prints" key="1" className="panel">
                                        <p className="accordianText">Almost every wave print design has available layout options including Vertical, Horizontal, and Triptych. Images below for reference. </p>
                                    </Panel>
                                    <Panel header="Sculptures" key="2" className="panel">
                                        <p className="accordianText">Sculptures can be customized to any layout shape or size desired.</p>
                                    </Panel>
                                </Collapse>
                            </Col>

                        </Row>
    
                    </Col>
    
                </Col>
            </Content>

        <Footer className="footer"> 
            <AAFooter/>
        </Footer>

        </Layout>
        );

}

export default Faqs;

