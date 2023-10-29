import { useState } from 'react';
// import { useParams } from 'react-router-dom'
import './detailProduct.scss'
import { Col, Container, Row } from 'react-bootstrap';

import ImageViewer from 'react-simple-image-viewer';

import img1 from "~/assest/users/img/product/baoda1.webp";
import img2 from "~/assest/users/img/product/baoda1_2.webp";
import img3 from "~/assest/users/img/product/baoda1.3.webp";
import img4 from "~/assest/users/img/product/baoda.14.webp";
import { useCallback } from 'react';



const DetailProduct = (props) => {
    // const { idProduct } = useParams();
    const [currentImg, setCurrentImg] = useState(img1);

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
            <Row className='gap-5 my-3'>
                <Col lg={5} className='col-12'>
                    <div className='imgup'>
                        <img src={currentImg} alt='hinh anh' width={"100%"} height={'auto'} onClick={() => openImageViewer(photoIndex)} />
                    </div>
                    <div className='imgdown'>
                        <div className='imgSmall'>
                            <img src={img1} alt='imgnho' onClick={() => handleClickImgs(img1, 0)} className={currentImg === img1 && "active"} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img2} alt='imgnho' onClick={() => handleClickImgs(img2, 1)} className={currentImg === img2 && "active"} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img3} alt='imgnho' onClick={() => handleClickImgs(img3, 2)} className={currentImg === img3 && "active"} />
                        </div>
                        <div className='imgSmall'>
                            <img src={img4} alt='imgnho' onClick={() => handleClickImgs(img4, 3)} className={currentImg === img4 && "active"} />
                        </div>

                    </div>
                </Col>
                <Col >
                    <div className='title-product '>BAO DA CHỐNG SỐC MACBOOK TAIKESEN | DA LỘN CAO CẤP - TS03</div>
                    <p className='category text-decoration-underline fs-14px'>Taikesen</p>
                    <div className='product-inf border-bottom'>
                        <div className='product-short-desc'>
                            <ul className='fs-14px'>
                                <li><strong>Brand: </strong><span style={{ color: "#002ED0" }}>Taikesen - Model TS03</span></li>
                                <li><strong>Thiết kế: </strong><span >Nhỏ gọn ôm sát máy, đường may chắc chắn, vật liệu bền bỉ</span></li>
                                <li><strong>Vật liệu: </strong><span style={{ color: "red" }}>Da lộn PU cao cấp</span></li>
                                <li className='text-muted'>Khóa gài chắc chắn bằng nam châm hít, không làm tuột máy ra khỏi bao da, an toàn tuyệt đối khi sử dụng.</li>
                                <li><strong>Tương thích: </strong>Macbook/Laptop 12.5" - 16" inch</li>
                                <li><strong>Combo gồm : </strong><span style={{ color: "#002ED0" }}>Bao da + Túi phụ kiện</span></li>
                                <li><strong>Màu sắc : </strong><span className='text-muted'>Xám-Hồng-Kem-Xanh-Đen</span></li>
                            </ul>
                        </div>
                        <p className='line-price'>
                            <span id="ProductPrice" class="ProductPrice fw-bold me-3" itemprop="price" content="650000">650,000₫</span>
                            <s id="ComparePrice" class="ComparePrice"> 900,000₫</s>
                        </p>
                        <p>
                            <em id="PriceSaving" class="PriceSaving">(Bạn sẽ tiết kiệm được 250,000₫)</em>
                        </p>

                    </div>
                    <div className='select-ops border-bottom'>
                        <div className='color py-3 d-flex gap-3' >
                            <strong className='d-flex align-items-center'>Màu sắc :</strong>
                            <select name="select-color" id="color">
                                <option value="xanhBlue">Xanh Blue</option>
                                <option value="black">Đen</option>
                                <option value="pink">Hồng</option>
                                <option value="grey">Nâu</option>
                            </select>
                        </div>
                        <div className='size py-3'>
                            <strong>Kích thước :</strong>
                            <select name="select-color" id="color">
                                <option value="sd">Size 12.5"/13.5</option>
                                <option value="sd">Size 13.5"/14</option>
                            </select>
                        </div>
                    </div>
                </Col>
            </Row>
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