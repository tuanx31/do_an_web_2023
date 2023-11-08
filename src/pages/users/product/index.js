import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import "./product.scss"
import renderCard from "~/service/users/renderproduct";
import { useEffect } from "react";
import { fetchAllProduct } from "~/service/admin/adminService";
import { fetchProductByCategory, fetchHotProduct, fetchNewProduct } from "~/service/users/product";
import { useState } from "react";



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



const Product = () => {
    //get id của giỏ hàng từ param
    const { idCategory } = useParams();
    const [listProduct, setListProduct] = useState([]);



    const fetchNewProducts = async () => {
        try {
            const data = await fetchNewProduct();
            if (data) {
                setListProduct(data);
            }
        } catch (error) {
            console.log(error)
        }

    }

    const fetchAllProducts = async () => {
        const data = await fetchAllProduct();
        if (data) {
            setListProduct(data)
        }
    }

    const fetchHotProducts = async () => {
        try {
            const data = await fetchHotProduct();
            console.log(data)
            if (data) {
                setListProduct(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchProductByCategorys = async () => {
        try {
            const data = await fetchProductByCategory(idCategory);
            if (data) {
                setListProduct(data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (idCategory === "all") {
            fetchAllProducts();
        }
        else if (idCategory === "hotproduct") {
            fetchHotProducts();
        }
        else if (idCategory === "newproduct") {
            fetchNewProducts();
        }
        else {
            fetchProductByCategorys();
        }
        let title = "Sản phẩm";
        document.title = title;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCategory])

    return (
        <Container>
            {/* {idCategory === "all" ? render(listProduct, "Tất cả sản phẩm") :
                listProduct[0] && render(listProduct, listProduct[0].categories.name)} */}
            {idCategory === "all" ? render(listProduct, "Tất cả sản phẩm") : idCategory === "hotproduct" ? render(listProduct, "Sản phẩm hot") : idCategory === "newproduct" ? render(listProduct, "Sản phẩm mới") :
                listProduct[0] && render(listProduct, listProduct[0].categories.name)}
        </Container>
    )
}

export default Product;
