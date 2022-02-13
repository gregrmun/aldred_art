import React from "react";
import { Layout, Button, Row, Col, Affix } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../home/carousel.css';


import '../index.css';
import 'antd/dist/antd.css';

import NavbarStyled from "../navigation/header";
import AAFooter from "../navigation/footer";
import HomeSlider from "../utils/homeslider";




const { Header, Footer, Content } = Layout;



const HomePage = (props) => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  

    
    return (
    <Layout className="layout" >
        
        <Affix>
                <Header className="header" style={{ zIndex: 1000, width: '100%', flexDirection: 'row'}}>
                    <NavbarStyled />
                </Header>
        </Affix>
      
        <Content>

                <Col className="site-layout-content">
                    <div className="innerBox" >
                       <HomeSlider />
                    </div>
                </Col>



                {/* <OwlCarousel className='owl-theme testimonial__carousel-wrapper' loop margin={10} nav autoplay="true" >

                    
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                        <div class="item">
                            <div role="listitem" class="testimonial__card w-dyn-item">
                                <img src={require('../../assets/home/EyeArt.png')} />
                            </div>
                        </div>
                         
                   

                   
                </OwlCarousel> */}


                

            
        </Content>
        
    <Footer className="footer"> 
        <AAFooter/>
    </Footer>
        
    </Layout>
    );
}

export default HomePage;
