import React from "react";
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';


import '../index.css';


const HomeSlider = (props) => {

    const history = useHistory();

    const goToHome = () => {
      history.push("/");
    };  

    const settings = {
     
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: 0,
        arrows: false,
        
      };

    
    return (
    
                    <div style={{alignItems: "center", justifyContent: 'center'}}>
                        <Slider {...settings}>
                            
                                <div >
                                    <img className="sliderCard"  src={require('../../assets/home/BoardArt.png')} />
                                </div>
                                <div >
                                    <img className="sliderCard" src={require('../../assets/home/EyeArt.png')} />
                                </div >
                                <div >
                                    <img className="sliderCard" src={require('../../assets/home/EyeArt.png')} />
                                </div>
                                <div >
                                    <img className="sliderCard" src={require('../../assets/home/EyeArt.png')} />
                                </div>
                            
                        </Slider>
                    </div>

    );
}

export default HomeSlider;
