import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "~/components/users/carousel";
import "./style.scss"

const Home = () => {
    return (

        <>
            <Slider />
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link className="text-black position-relative ">SẢN PHẨM KHUYẾN MÃI</Link></h2>

                </div>
            </Container>

        </>

    )
}

export default Home;