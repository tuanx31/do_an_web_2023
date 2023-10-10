import { Col, NavDropdown, Navbar, Row } from 'react-bootstrap';
import './Heading.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline, IoCallSharp } from 'react-icons/io5';
import { useState } from 'react';
import "bootstrap/js/dist/dropdown"
import { trademark } from '../../../../data/trademark';
const Header = () => {
    // const [products, setProduct] = useState([
    //     {
    //         id: 1,
    //         name: "Phụ kiện macbook ,iwatch",
    //         path: "product1"
    //     },
    //     {
    //         id: 2,
    //         name: "Phụ kiện điện thoại",
    //         path: "product2"
    //     }, {
    //         id: 3,
    //         name: "Phụ kiện ô tô , đồ chơi công nghệ",
    //         path: "product3"
    //     },
    //     {
    //         id: 0,
    //         name: "Others",
    //         path: "otherProduct"
    //     },
    // ])
    return (
        <Navbar expand="lg" >
            <Container>
                <Row className='w-100 text-uppercase' >
                    <Col lg={2}>
                        <Navbar.Brand href="" className='text-capitalize'><Link to={""} className='text-logo text-light '>Tuna Shop</Link></Navbar.Brand>
                    </Col>
                    <Col lg={10} className='d-flex align-items-center' >
                        <Navbar.Collapse>
                            <Nav className='d-flex w-100 justify-content-between'>
                                <Nav.Item>
                                    <Link to={""} className='fs-6 nav-link'>Trang Chủ</Link>
                                </Nav.Item>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="allproduct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sản Phẩm                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            trademark?.map((product, index) => (
                                                <li><Link className="dropdown-item" key={index} to={product.path}>{product?.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <Nav.Item>
                                    <Link to={"contact"} className='fs-6 nav-link'>Liên hệ</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"introduce"} className='fs-6 nav-link'>Giới Thiệu</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"account"} className='fs-6 nav-link'>Tài khoản</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"search"} className='fs-6 nav-link'> <span className='d-lg-none d-xl-inline d-md-inline me-1'>Tìm kiếm</span><AiOutlineSearch size={20} /></Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"cart"} className='fs-6 nav-link'><span className='d-lg-none d-xl-inline d-md-inline me-1'>Giỏ hàng  </span><IoCartOutline size={20} /></Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"contact"} className='fs-6 nav-link'><IoCallSharp className='me-1' /> 0824892083</Link>
                                </Nav.Item>


                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar" className='btntoggle' />
                </Row>
            </Container>
        </Navbar >
    )
}

export default Header;