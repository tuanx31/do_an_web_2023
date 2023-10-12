// import { products } from "~/data/product";
import { products } from "~/data/product";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./product.scss"
const Product = () => {
    const { idCategory } = useParams();
    return (
        <Container>
            <div className="breadcrumb-small my-1">
                <Link to={"/"} className="text-dark">Trang chủ </Link>
                <span> / Tất cả sản phẩm</span>
            </div>
            {/* <Row>
                <div className="title">
                    <h1 className="text-uppercase">Tất cả sản phẩm</h1>
                </div>
                {
                    products?.map((item, index) => (
                        <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3">
                            <div class="card">
                                <img src={require("~/assest/users/img/product/mac.webp")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.price}VND</p>
                                    <Link className="btn btn-primary">Buy</Link>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row> */}
            <h1>{idCategory}</h1>
        </Container>
    )
}

export default Product;
