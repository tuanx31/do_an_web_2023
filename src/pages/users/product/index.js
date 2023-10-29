import { products } from "~/assest/users/data/product";
import { Category } from "~/assest/users/data/Category";


import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import "./product.scss"
import renderCard from "~/service/users/renderproduct";

//render page
const render = (item, title) => {
    return (
        <>
            <div className="breadcrumb-small my-2">
                <Link to={"/"} className="text-dark">Trang chủ </Link>
                <span>/{title}</span>
            </div>
            <Row className="mb-5 mt-3">
                <div className="title">
                    <h1 className="text-uppercase border-bottom">{title}</h1>
                </div>
                {renderCard(item)}
            </Row>
        </>
    )
}
//filter product
const renderProduct = (idCategory) => {
    if (idCategory === "all") {

        return render(products, "Tất cả sản phẩm")
    }
    else {
        // lọc sản phẩm theo id category
        const productFilter = products?.filter((item) => {
            return item.id_category === Number(idCategory)
        })
        const categoryFilter = Category.find((item) => {
            return String(item.id) === idCategory
        })
        const filter = categoryFilter.name
        return render(productFilter, filter)
    }
}


const Product = () => {
    //get id của giỏ hàng từ param
    const { idCategory } = useParams();
    return (
        <Container>

            {renderProduct(idCategory)}

        </Container>
    )
}

export default Product;
