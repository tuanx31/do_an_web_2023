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
import Loading from "~/components/users/loading";


import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {


    const [hotProduct, setHotProduct] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    const [hotloading, sethotLoading] = useState(false);
    const [newLoading, setNewLoading] = useState(false);

    const fetchNewProducts = async () => {
        try {
            sethotLoading(true)
            const newProducts = await fetchNewProduct();
            if (newProducts) {
                setNewProduct(newProducts);
            }
            sethotLoading(false)
        } catch (error) {
            console.log(error)
        }

    }
    const fetchHotProducts = async () => {
        try {
            setNewLoading(true)
            const newProducts = await fetchHotProduct();
            if (newProducts) {
                setHotProduct(newProducts);
            }
            setNewLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        document.title = "Tuna Shop";
        fetchHotProducts();
        fetchNewProducts();
        Aos.init({ duration: 2000 });

    }, [])
    return (
        <>
            <SliderCarousel />
            <TextAnimation />
            <div className="dd-acc-202311-holiday container" data-aos="fade-up">
                <div className="dd-l-mw1070">

                    <div class="dd-l-plate my-3">
                        <div class="dd-content">
                            <div class="dd-info">
                                <h2 class="t-headline-reduced" data-aos="fade-up">
                                    Điều tuyệt vời đang chờ&nbsp;bạn.
                                </h2>
                                <p data-aos="fade-up">Mùa phụ kiện đã đến rồi đây.</p>
                                <p class="dd-link" data-aos="fade-up">
                                    <Link to={"/products/1"}>Mua ngay</Link>
                                </p>
                            </div>
                        </div>
                        <div class="dd-image">
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-holiday-accessories-202311?wid=2140&amp;hei=960&amp;fmt=png-alpha&amp;.v=1697113198807" alt="Những ngọn đồi giấy nằm xen kẽ phụ kiện và thiết bị Apple" width="1070" height="480" data-scale-params-1="wid=1070&amp;hei=480&amp;fmt=png-alpha&amp;.v=1697113198807" data-scale-initial="2" class="dd-hero dd-invert-classic ir" />

                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link to={"/products/hotproduct"} className="text-black position-relative text-uppercase">Sản Phẩm Hot</Link></h2>
                    <div className="sale-products my-4 mb-5" data-aos="fade-up">
                        <Row>
                            {hotloading ? <Loading /> : hotProduct && <ProductCollection data={hotProduct} />}
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Link to={"/products/hotproduct"} className="btn btn-dark p-3 text-uppercase" >xem thêm sản phẩm hot</Link>
                        </div>
                    </div>
                </div>

                <div className="Sale my-4">
                    <h2 className="text-center fw-bold sale-title position-relative mb-3"><Link to={"/products/newproduct"} className="text-black position-relative text-uppercase">Sản Phẩm Mới Nhất</Link></h2>
                    <div className="sale-products my-4 mb-5" data-aos="fade-up">
                        <Row>
                            {newLoading ? <Loading /> : newProduct && <ProductCollection data={newProduct} />}
                        </Row>
                        <div className="d-flex justify-content-center" >
                            <Link to={"/products/newproduct"} className="btn btn-dark p-3 text-uppercase" >xem thêm sản phẩm mới</Link>
                        </div>
                    </div>
                </div>

                <div className="pro mt-2" data-aos="fade-up">
                    <h2 className="text-center text-uppercase uytin position-relative fw-bold">Vì sao nên chọn chúng tôi</h2>
                    <p className="text-center fs-14px">Sản phẩm từ cửa hàng của ShopTuna được thiết kế tinh tế, đẹp mắt , chất lượng đảm bảo với các mẫu đa dạng. Chúng tôi luôn sáng tạo từng ngày để đem đến cho khách hàng những sản phẩm hiện đại nhất.</p>
                    <Uytin />
                </div>

            </Container>

        </>

    )
}

export default Home;