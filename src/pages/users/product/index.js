import { products } from "~/assest/users/data/product";
import { Category } from "~/assest/users/data/Category";

import Cards from "~/components/users/card";

import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import "./product.scss"

//render card
const renderCard = (item, title) => {
    return (
        <>
            <div className="breadcrumb-small my-1">
                <Link to={"/"} className="text-dark">Trang chủ </Link>
                <span>/{title}</span>
            </div>
            <Row className="mb-5">
                <div className="title">
                    <h1 className="text-uppercase border-bottom">{title}</h1>
                </div>
                {
                    item?.map((item, index) => (
                        <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <Cards key={index} imgurl={item?.img} title={item?.title} price={item?.price} sale_of={item?.sale_of} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
//filter product
const renderProduct = (idCategory) => {
    if (idCategory === "all") {

        return renderCard(products, "Tất cả sản phẩm")
    }
    else {
        const productFilter = products?.filter((item) => {
            return item.id_category === Number(idCategory)
        })
        const categoryFilter = Category.find((item) => {
            return String(item.id) === idCategory
        })
        const filter = categoryFilter.name
        return renderCard(productFilter, filter)
    }
}


const Product = () => {
    const { idCategory } = useParams();


    return (
        <Container>
            {renderProduct(idCategory)}
        </Container>
    )
}

export default Product;
