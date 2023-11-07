import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Slider from "~/components/users/carousel";
import Uytin from "~/components/users/uytin/Uytin";


import renderCard from "~/service/users/renderproduct";
import { fetchHotProduct } from "~/service/users/product";


import "./style.scss"
import { useEffect, useState } from "react";


const Home = () => {

    const [hotProduct, setHotProduct] = useState([]);
    const fetchNewProduct = async () => {
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
        fetchNewProduct();
    }, [])

    return (
        <>
            <Slider />
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link className="text-black position-relative text-uppercase">Sản Phẩm Hot</Link></h2>
                    <div className="sale-products my-5">
                        <Row>
                            {renderCard(hotProduct)}
                        </Row>
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