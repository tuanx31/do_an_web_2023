import { Carousel } from "react-bootstrap";
import './style.scss'

function Slider() {
    return (
        <Carousel interval={2500}>
            <Carousel.Item>
                <img className="d-block w-100" src={require('~/assest/users/img/Slider/slideshow_1.webp')} alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('~/assest/users/img/Slider/slideshow_2.webp')}
                    alt="Slide 2"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;