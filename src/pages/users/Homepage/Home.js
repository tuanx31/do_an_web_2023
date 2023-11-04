import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Slider from "~/components/users/carousel";
import { test_products } from "~/assest/users/data/test";
import renderCard from "~/service/users/renderproduct";


import "./style.scss"
import { useEffect, useState } from "react";
import { fetchAllProduct } from "~/service/admin/adminService";

const Home = () => {

    const [newProduct, setNewProduct] = useState([]);
    const fetchNewProduct = async () => {
        const newProducts = await fetchAllProduct();
        setNewProduct(newProducts);
    }

    useEffect(() => {
        fetchNewProduct();
    }, [])

    return (
        <>
            <Slider />
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link className="text-black position-relative ">SẢN PHẨM KHUYẾN MÃI</Link></h2>
                    <div className="sale-products my-5">
                        <Row>
                            {renderCard(newProduct)}
                        </Row>
                    </div>
                </div>
            </Container>

        </>

    )
}

export default Home;