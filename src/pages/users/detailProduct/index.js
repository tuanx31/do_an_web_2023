import './detailProduct.scss'

import { GiRibbonMedal } from 'react-icons/gi';
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsShieldFillCheck } from 'react-icons/bs'
import { PiNumberSquareSevenThin } from 'react-icons/pi'

import { Col, Container, Row } from 'react-bootstrap';

import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

import ImageViewer from 'react-simple-image-viewer';

import img1 from "~/assest/users/img/product/baoda1.webp";
import img2 from "~/assest/users/img/product/baoda1_2.webp";
import img3 from "~/assest/users/img/product/baoda1.3.webp";
import img4 from "~/assest/users/img/product/baoda.14.webp";

import { fetch1Product } from '~/service/users/product';


const DetailProduct = (props) => {

    const { idProduct } = useParams();

    const [product, setProduct] = useState({})
    const fetchDetailProduct = async () => {
        const dProduct = await fetch1Product(idProduct);
        await setProduct(dProduct);

    }

    useEffect(() => {
        fetchDetailProduct();
    }, [])
    const [currentImg, setCurrentImg] = useState();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        img1, img2, img3, img4
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const handleClickImgs = (img, index) => {
        setCurrentImg(img);
        setPhotoIndex(index);
    }

    return (
        <Container>
            <div className='routed fs-14px my-3'><Link to="" className='text-black'>Trang chủ</Link> / {product.name}</div>
            <Row className='gap-5 my-5'>
                <Col lg={5} className='col-12'>
                    <div className='imgup'>
                        <img src={"https://localhost:7139/resources/" + product.img} alt='hinh anh' width={"100%"} height={'auto'} onClick={() => openImageViewer(photoIndex)} />
                    </div>
                    <div className='imgdown'>
                        <div className='imgSmall'>
                            <img src={img1} alt='imgnho' onClick={() => handleClickImgs(img1, 0)} className={currentImg === img1 ? "active" : ""} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img2} alt='imgnho' onClick={() => handleClickImgs(img2, 1)} className={currentImg === img2 ? "active" : ""} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img3} alt='imgnho' onClick={() => handleClickImgs(img3, 2)} className={currentImg === img3 ? "active" : ""} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img4} alt='imgnho' onClick={() => handleClickImgs(img4, 3)} className={currentImg === img4 ? "active" : ""} />
                        </div>

                    </div>
                </Col>
                <Col >
                    <div className='title-product mb-3 text-uppercase'>{product.name}</div>
                    <p className='category text-decoration-underline fs-14px mb-5'>Taikesen</p>
                    <div className='product-inf border-bottom'>
                        <div className='product-short-desc'>
                            <ul className='fs-14px'>
                                <li><strong>Brand: </strong><span style={{ color: "#002ED0" }}>Taikesen - Model TS03</span></li>
                                <li><strong>Thiết kế: </strong><span >{product.design}</span></li>
                                <li><strong>Vật liệu: </strong><span style={{ color: "red" }}>{product.consistent}</span></li>
                                <li className='text-muted'>{product.desc}</li>
                                <li><strong>Tương thích: </strong>{product.consistent}</li>
                                <li><strong>Combo gồm : </strong><span style={{ color: "#002ED0" }}>Bao da + Túi phụ kiện</span></li>
                                <li><strong>Màu sắc : </strong><span className='text-muted'>{product.color}</span></li>
                            </ul>
                        </div>
                        <p className='line-price'>
                            <span id="ProductPrice" className="ProductPrice fw-bold me-3" itemProp="price" >{product.price && (product.price - (product.sale_of / 100 * product.price)).toLocaleString()}₫</span>
                            <s id="ComparePrice" className="ComparePrice">{product.price && product.price.toLocaleString()}₫</s>
                        </p>
                        <p>
                            <em id="PriceSaving" className="PriceSaving">(Bạn sẽ tiết kiệm được {product.price && (product.price * product.sale_of / 100).toLocaleString()}₫)</em>
                        </p>
                    </div>
                    <div className='select-ops border-bottom'>
                        <div className='color py-3 d-flex gap-3' >
                            <strong className='d-flex align-items-center'>Màu sắc :</strong>
                            <select name="select-color" className='shadow-sm form-select rounded-1 border-0' id="color">
                                <option value="xanhBlue">Xanh Blue</option>
                                <option value="black">Đen</option>
                                <option value="pink">Hồng</option>
                                <option value="grey">Nâu</option>
                            </select>
                        </div>
                        <div className='size py-3 d-flex gap-3'>
                            <strong className='d-flex align-items-center'>Kích thước :</strong>
                            <select className="form-select shadow-sm rounded-1 border-0" aria-label="Default select example">
                                <option selected="">Size 12.5"/13.5</option>
                                <option value={1}>Size 13.5"/14</option>
                            </select>
                        </div>

                    </div>
                    <div className='quantity-Product border-bottom py-4 d-flex gap-3'>
                        <label className='d-flex align-items-center'>Số Lượng : </label>
                        <input className='input-group rounded-1 border-1' type="number" id="quantity" name="quantity" min="1" max="999999" />
                        <button className='btn btn-outline-primary rounded-1'>Mua Ngay</button> <button className='btn btn-outline-success rounded-1' >Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>

            <div style={{ background: "#f4f4f4" }} className=' py-4 row my-4' >
                <div className='fs-14px col-3 text-center text-uppercase'><GiRibbonMedal size={35} className='me-1' color='#9f876b' />Hàng chính hãng</div>
                <div className='fs-14px col-3 text-center text-uppercase'><LiaShippingFastSolid size={35} className='me-2' color='#9f876b' />Miễn phí vận chuyển</div>
                <div className='fs-14px col-3 text-center text-uppercase'><BsShieldFillCheck size={35} className='me-2' color='#9f876b' />bảo hành 5 năm</div>
                <div className='fs-14px col-3 text-center text-uppercase'><PiNumberSquareSevenThin size={35} className='me-2' color='#9f876b' />đổi hàng trong vòng 7 ngày</div>
            </div>
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                />
            )}
        </Container>


    )
}

export default DetailProduct