import React, { useState } from 'react';
import { Button, Menu, Dropdown, Layout, Row, Affix } from 'antd';
import '../index.css';   
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

const NavbarStyled = (props) => {

  const history = useHistory();  

  const goToHome = () => {
    history.push("/");
  };  

  const goToFAQs = () => {
    history.push("/faqs");
  }; 

  const goToContact = () => {
    history.push("/contact");
  }; 

  const goToArtwork = () => {
    history.push("/portfolio/artwork");
  };

  const goToClientwork = () => {
    history.push("/portfolio/client-work");
  };

  const goToCustomSurfboards = () => {
    history.push("/services/custom-surfboards");
  }; 

  const goToCustomCanvases = () => {
    history.push("/services/custom-canvases");
  };

  const goToGraphicDesign = () => {
    history.push("/services/graphic-design");
  };

  const PortfolioMenu = () => {

    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" onClick={goToArtwork}>
            Artwork
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" onClick={goToClientwork}>
            Client Work
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  const ServicesMenu = () => {

    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" onClick={goToCustomSurfboards}>
            Custom Surfboards
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" onClick={goToCustomCanvases}>
            Custom Canvases
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" onClick={goToGraphicDesign}>
            Graphic Design
          </a>
        </Menu.Item>
      </Menu>
    )
  }
    
    return (
            
            // <Affix offsetTop={0}>
            <>
              <Row 
                justify="space-between" 
                className="headerDims"
              >
                  <img src={require('../../assets/home/WaveLeft.png')} className="waveImg"/>
                  <Button type="ghost" className="logoButton">
                      <img src={require('../../assets/home/Logo.png')} className="logo" onClick={goToHome}/>
                  </Button>
                  <img src={require('../../assets/home/WaveRight.png')} className="waveImg"/>
              </Row>


                <Row 
                  justify="space-between" 
                  className="headerButtons"
                  >
                  <Row>
                    <Dropdown 
                      overlay={PortfolioMenu} 
                      placement="bottomCenter" 
                    >
                      <Button type="ghost" className="headerButton">
                          Portfolio
                      </Button>
                    </Dropdown>

                    <Dropdown 
                      overlay={ServicesMenu} 
                      placement="bottomCenter" 
                    >
                      <Button type="ghost" className="headerButton">
                          Services
                      </Button>
                    </Dropdown>
                    
                      
                  </Row>

                      
                  <Row>
                      <Button type="ghost" className="headerButton" onClick={goToFAQs}>
                          FAQs
                      </Button>

                      <Button type="ghost" className="headerButton" onClick={goToContact}>
                          Contact
                      </Button>
                  </Row>
                </Row>
              {/* </Affix> */}
              </>
              
                        
    );
}

export default NavbarStyled;
