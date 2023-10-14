import { products } from "~/assest/users/data/product";
import Cards from "~/components/users/card";

import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import "./product.scss"
//filter product
const renderProduct = (idCategory) => {
    if (idCategory === "all") {
        return (
            <>{
                products?.map((item, index) => (
                    <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Cards key={index} imgurl={item?.img} title={item?.title} price={item?.price} />
                    </Col>
                ))}
            </>
        )
    }
    else {
        const productFilter = products?.filter((item) => {
            return item.id_category === Number(idCategory)
        })
        return (
            <>{
                productFilter?.map((item, index) => (
                    <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Cards key={index} imgurl={item?.img} title={item?.title} price={item?.price} />
                    </Col>
                ))
            }
            </>

        )

    }
}


const Product = () => {
    const { idCategory } = useParams();


    return (
        <Container>
            <div className="breadcrumb-small my-1">
                <Link to={"/"} className="text-dark">Trang chủ </Link>
                <span> / Tất cả sản phẩm</span>
            </div>
            <Row className="mb-5">
                <div className="title">
                    <h1 className="text-uppercase">Tất cả sản phẩm</h1>
                </div>
                {renderProduct(idCategory)}
            </Row>
        </Container>
    )
}

export default Product;
