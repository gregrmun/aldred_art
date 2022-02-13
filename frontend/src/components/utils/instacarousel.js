import React from 'react'
import Slider from 'react-slick'

export default class InstaCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      instagramData: this.props.instagramData
    }
  }
  render() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    return (
      <Slider {...settings}>
        {this.state.instagramData.map((slide, index) => {
          return (
            <div key={index}>
              <a href={slide.link} target="_blank">
                <img src={slide.images.thumbnail.url} />
              </a>
            </div>
          )
        })}
      </Slider>
    )
  }
}