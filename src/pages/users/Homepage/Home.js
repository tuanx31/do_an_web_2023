import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import SliderCarousel from "~/components/users/carousel";
import Uytin from "~/components/users/uytin/Uytin";


import { fetchHotProduct, fetchNewProduct } from "~/service/users/product";

import "./style.scss"
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCollection from "~/components/users/productCollection";
import TextAnimation from "~/components/users/textAnimation";




const Home = () => {


    const [hotProduct, setHotProduct] = useState([]);
    const [newProduct, setNewProduct] = useState([]);


    const fetchNewProducts = async () => {
        try {
            const newProducts = await fetchNewProduct();
            if (newProducts) {
                setNewProduct(newProducts);
            }
        } catch (error) {
            console.log(error)
        }

    }
    const fetchHotProducts = async () => {
        try {
            const newProducts = await fetchHotProduct();
            if (newProducts) {
                setHotProduct(newProducts);
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        document.title = "Tuna Shop";
        fetchHotProducts();
        fetchNewProducts();
    }, [])

    return (
        <>
            <SliderCarousel />
            <TextAnimation />
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link to={"/products/hotproduct"} className="text-black position-relative text-uppercase">Sản Phẩm Hot</Link></h2>
                    <div className="sale-products my-4 ">
                        <Row>
                            {hotProduct && <ProductCollection data={hotProduct} />}
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Link to={"/products/hotproduct"} className="btn btn-dark p-3 text-uppercase" >xem thêm sản phẩm hot</Link>
                        </div>
                    </div>
                </div>

                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link to={"/products/newproduct"} className="text-black position-relative text-uppercase">Sản Phẩm Mới Nhất</Link></h2>
                    <div className="sale-products my-4 ">
                        <Row>
                            {newProduct && <ProductCollection data={newProduct} />}
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Link to={"/products/newproduct"} className="btn btn-dark p-3 text-uppercase" >xem thêm sản phẩm mới</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-center text-uppercase uytin position-relative fw-bold">Vì sao nên chọn chúng tôi</h2>
                    <Uytin />
                </div>
            </Container>

        </>

    )
}

export default Home;