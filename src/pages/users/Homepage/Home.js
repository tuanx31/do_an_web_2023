import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "~/components/users/carousel";
import "./style.scss"
import Cards from "~/components/users/card";
import { test_products } from "~/assest/users/data/test";

const Home = () => {
    return (
        <>
            <Slider />
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link className="text-black position-relative ">SẢN PHẨM KHUYẾN MÃI</Link></h2>
                    <div className="sale-products my-5">
                        <Row>
                            {
                                test_products?.map((item, index) => (
                                    <Col key={index} lg={3} md={4} className="mb-4" >
                                        <Cards key={index} imgurl={item?.img} title={item?.title} price={item?.price} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </Container>

        </>

    )
}

export default Home;