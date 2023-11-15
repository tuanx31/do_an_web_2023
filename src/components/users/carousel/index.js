import { Carousel } from "react-bootstrap";
import './style.scss'

function SliderCarousel() {
    return (
        <Carousel interval={2500}>
            <Carousel.Item>
                <img className="d-block w-100" src={require('~/assest/users/img/Slider/slide1.png')} alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('~/assest/users/img/Slider/slide3.png')}
                    alt="Slide 3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('~/assest/users/img/Slider/slider2.png')}
                    alt="Slide 2"
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default SliderCarousel;