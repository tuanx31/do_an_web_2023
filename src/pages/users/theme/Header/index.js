import { Col, Navbar, Row, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/js/dist/dropdown"

import './Heading.scss'

import { AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';

import { NavLink, Link } from 'react-router-dom';


import { Category } from '~/assest/users/data/Category';

const Header = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Row className='w-100 text-uppercase' >
                    <Col lg={2} className='pe-4'>
                        <Navbar.Brand className='text-capitalize'><Link to={""} className='text-logo text-light '>Tuna Shop</Link></Navbar.Brand>
                    </Col>
                    <Col lg={10} className='d-flex align-items-center p-0' >
                        <Navbar.Collapse>
                            <Nav className='d-flex w-100 justify-content-between'>
                                <Nav.Item>
                                    <NavLink to={""} className='fs-6 nav-link'>Trang Chủ</NavLink>
                                </Nav.Item>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="allproduct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sản Phẩm </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            Category?.map((product, index) => (
                                                <li key={index}><Link className="dropdown-item" key={index} to={`/products/${product.id}`}>{product?.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <Nav.Item>
                                    <NavLink to={"contact"} className='fs-6 nav-link'>Liên hệ</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to={"introduce"} className='fs-6 nav-link'>Giới Thiệu</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to={"account"} className='fs-6 nav-link'>Tài khoản</NavLink>
                                </Nav.Item>
                                <form className="d-flex formsearch">
                                    <input className="form-control me-2" type="search" placeholder="Tìm kiếm ..." aria-label="Search" />
                                    <button className="btn" type="submit"><AiOutlineSearch size={20} /></button>
                                </form>
                                <Nav.Item>
                                    <NavLink to={"cart"} className='fs-6 nav-link'><span className='d-lg-none d-xl-inline d-md-inline me-1'></span><IoCartOutline size={20} /></NavLink>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <NavLink to={"contact"} className='fs-6 nav-link d-none phone'><IoCallSharp className='me-1' /> 0824892083</NavLink>
                                </Nav.Item> */}
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