import { Col, NavDropdown, Navbar, Row } from 'react-bootstrap';
import './Heading.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline, IoCallSharp } from 'react-icons/io5';

const Header = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Row className='w-100 text-uppercase' >
                    <Col lg={2}>
                        <Navbar.Brand href="" className='text-logo text-light text-capitalize'>Tuna Shop</Navbar.Brand>
                    </Col>
                    <Col lg={10} className='d-flex align-items-center' >
                        <Navbar.Collapse>
                            <Nav className='d-flex w-100 justify-content-around '>
                                <Nav.Item>
                                    <Link to={""} className='fs-6 nav-link'>Trang Chủ</Link>
                                </Nav.Item>
                                <NavDropdown title="Sản Phẩm" id="basic-nav-dropdown text-uppercase">
                                    <NavDropdown.Item href="">Phụ kiện macbook ,iwatch</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Phụ kiện điện thoại
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Phụ kiện ô tô , đồ chơi công nghệ</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Others
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Link to={"contact"} className='fs-6 nav-link'>Liên hệ</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={"introduce"} className='fs-6 nav-link'>Giới Thiệu</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={""} className='fs-6 nav-link'>Tài khoản</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='fs-6 nav-link'> <span className='d-lg-none d-xl-inline d-md-inline me-1'>Tìm kiếm</span><AiOutlineSearch size={20} /></Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='fs-6 nav-link'><span className='d-lg-none d-xl-inline d-md-inline me-1'>Giỏ hàng  </span><IoCartOutline size={20} /></Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to={""} className='fs-6 nav-link'><IoCallSharp className='me-1' /> 0824892083</Link>
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