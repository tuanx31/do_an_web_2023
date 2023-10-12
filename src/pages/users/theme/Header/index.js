import { Col, Navbar, Row } from 'react-bootstrap';
import './Heading.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';
import "bootstrap/js/dist/dropdown"
import { Category } from '~/data/Category';
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
                                    <Link to={""} className='fs-6 nav-link'>Trang Chủ</Link>
                                </Nav.Item>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="allproduct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sản Phẩm </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            Category?.map((product, index) => (
                                                <li><Link className="dropdown-item" key={index} to={`/products/${product.id}`}>{product?.name}</Link></li>
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
                                <form class="d-flex formsearch">
                                    <input class="form-control me-2" type="search" placeholder="Tìm kiếm ..." aria-label="Search" />
                                    <button class="btn" type="submit"><AiOutlineSearch size={20} /></button>
                                </form>
                                <Nav.Item>
                                    <Link to={"cart"} className='fs-6 nav-link'><span className='d-lg-none d-xl-inline d-md-inline me-1'></span><IoCartOutline size={20} /></Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Link to={"contact"} className='fs-6 nav-link d-none phone'><IoCallSharp className='me-1' /> 0824892083</Link>
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