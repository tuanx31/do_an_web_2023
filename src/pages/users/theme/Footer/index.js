import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { AiOutlineHome } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import "./Footer.scss";

import { Category } from '~/assest/users/data/Category';
const Footer = () => {
    return (
        <>
            <div className='footer text-light'>
                <Container>
                    <Row className='pt-5'>
                        <Col lg={4} md={12} className='pe-5'>
                            <h3 className='footer-title text-uppercase'>Tuna Shop</h3>
                            <div className='footer-address color-footer'>
                                <AiOutlineHome className='me-2' />
                                <span>Showroom: 108 Lê Duẩn, Thành Phố Vinh, Tỉnh Nghệ An</span>
                            </div>
                            <div className='footer-address color-footer'>
                                <AiOutlineHome className='me-2' />
                                <span> Kho: Thư viện trường Đại học Vinh, 108 Lê Duẩn, thành phố Vinh, Nghệ An</span>
                            </div>
                            <div className='ft-hotline color-footer'>
                                <BsFillTelephoneFill className='me-2' />
                                <span>0824892083</span>
                            </div>
                            <div className='ft-email color-footer'>
                                <HiMail className='me-2' />
                                <span> nguyendinhtuanx31@gmail.com</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='d-flex justify-content-lg-center'>
                            <div>
                                <h3 className='footer-title text-uppercase '>Dịch vụ</h3>
                                <p><Link to={"search"} className='color-footer'>Tìm kiếm</Link></p>
                                <p><Link to={"introduce"} className='color-footer'>Giới thiệu</Link></p>
                                <p><Link to={""} className='color-footer'>Chính sách bảo hành</Link></p>
                                <p><Link to={""} className='color-footer'>Chính sách bảo mật</Link></p>
                                <p><Link to={""} className='color-footer'>Điều khoản dịch vụ</Link></p>
                            </div>


                        </Col>
                        <Col lg={4} md={6} className='d-flex justify-content-lg-end'>
                            <div>
                                <h3 className='footer-title text-uppercase'>Sản phẩm</h3>
                                {
                                    Category?.map((product, index) => (
                                        <p key={index}><Link className="dropdown-item color-footer" key={index} to={`/products/${product.id}`}>{product?.name}</Link></p>
                                    ))
                                }
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <div className='pay-acept mb-4'>
                            <img src={require('~/assest/users/img/Footer/pay_acept.webp')} alt='' width={250}></img>
                        </div>
                    </Row>

                </Container>
            </div>
            <div className='footer-copyright'>
                <Container >
                    <span className='color-footer '>Copyrights © 2023 by Tuna</span>
                    <a href='https://www.facebook.com/tuanx31/'><FaFacebook className='icon-fb float-end' size={20} /></a>
                </Container>
            </div>
        </>
    )
}

export default memo(Footer);