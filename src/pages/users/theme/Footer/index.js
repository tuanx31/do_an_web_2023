import { memo } from 'react';
import "./Footer.scss";
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer text-light'>
            <Container>

                <Row className='pt-5'>
                    <Col lg={4} className='pe-5'>
                        <h3 className='footer-title text-uppercase'>Tuna Shop</h3>
                        <div className='footer-address color-footer'>
                            <AiOutlineHome />
                            <span>Showroom: 108 Lê Duẩn, Thành Phố Vinh, Tỉnh Nghệ An</span>
                        </div>
                        <div className='footer-address color-footer'>
                            <AiOutlineHome />
                            <span> Kho: Thư viện trường Đại học Vinh, 108 Lê Duẩn, thành phố Vinh, Nghệ An</span>
                        </div>
                        <div className='ft-hotline color-footer'>
                            <BsFillTelephoneFill />
                            <span>0824892083</span>
                        </div>
                        <div className='ft-email color-footer'>
                            <HiMail />
                            <span> nguyendinhtuanx31@gmail.com</span>
                        </div>
                    </Col>
                    <Col lg={4} className='px-5 '>
                        <h3 className='footer-title text-uppercase '>Dịch vụ</h3>
                        <p><Link className='color-footer'>Tìm kiếm</Link></p>
                        <p><Link className='color-footer'>Giới thiệu</Link></p>
                        <p><Link className='color-footer'>Chính sách bảo hành</Link></p>
                        <p><Link className='color-footer'>Chính sách bảo mật</Link></p>
                        <p><Link className='color-footer'>Điều khoản dịch vụ</Link></p>

                    </Col>
                    <Col lg={4} className='ps-5'>
                        <h3 className='footer-title text-uppercase'>Sản phẩm</h3>
                        <p><Link to={""} className='color-footer'>Phụ kiện Macbook</Link></p>
                        <p><Link to={""} className='color-footer'>Phụ kiện điện thoại</Link></p>
                        <p><Link to={""} className='color-footer'>Đồ chơi công nghệ </Link></p>
                        <p><Link to={""} className='color-footer'>Others</Link></p>
                    </Col>
                </Row>
                <Row>
                    <div className='pay-acept'>
                        <img src={""}></img>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default memo(Footer);