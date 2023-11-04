import { Col, Container, Row } from 'react-bootstrap';
import './checkout.scss'
import { Link } from 'react-router-dom';
import logo from "~/assest/logo/logo1.png"
import img1 from "~/assest/users/img/product/baoda1.webp";
const Checkout = () => {
    return (
        <Container>
            <Row className='gap-5'>
                <Col sm={6} className='py-4 col-12'>
                    <div>
                        <img src={logo} alt='' style={{ width: "150px", height: "100px" }} />
                    </div>
                    <div className="mt-3"><Link className='text-black' >Giỏ hàng /</Link>Thanh Toán</div>
                    <h4 className='fw-bold my-2 text-uppercase'>Thông Tin Thanh Toán</h4>

                    <div className='d-flex gap-3 justify-content-between border-bottom py-2'>
                        <img src={img1} width={65} height={65} alt='hinhN' />
                        <div >
                            <div className='productTitle'>Bao da chống sốc Macbook cao cấp Takesen TS03 </div>
                            <div className='text-muted'>taikensen</div>
                        </div>
                        <div className='d-flex align-items-center'>640,000d</div>
                    </div>
                    <div className='d-flex justify-content-between my-3'>
                        <input className='form-control w-75' placeholder='Mã giảm giá' />
                        <button className='btn btn-primary'>Sử dụng</button>
                    </div>
                    <div className='py-4 border-top border-bottom'>
                        <div className='d-flex justify-content-between mb-2 fs-14px'><span>Tạm tính</span><span>640,000d</span></div>
                        <div className='d-flex justify-content-between fs-14px'><span>Phí Ship</span><span>free</span></div>
                    </div>
                    <div className='d-flex justify-content-between mt-2 h5'><span>Tổng tiền</span><span>640,000d</span></div>
                </Col>
                <Col className='py-4'>
                    <p><span>Bạn đã có tài khoản? </span> <span style={{ cursor: "pointer" }} className='dangnhap'>Đăng nhập</span></p>
                    <div>
                        <div className='form-floating my-3 ' >
                            <input type='text' className='form-control' placeholder='Họ và tên' />
                            <label for="floatingInput">Họ và tên</label>
                        </div>

                        <div class="d-flex flex-row bd-highlight gap-2" >
                            <div className='form-floating my-2  w-100 bd-highlight '>
                                <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className='form-floating my-2  flex-shrink-2 bd-highlight'>
                                <input type='email' className='form-control' id='floatingInput' placeholder='Nhap so dien thoai cua ban' />
                                <label for="floatingInput">Điện thoại</label>
                            </div>
                        </div>
                        <div className='form-floating my-3 ' >
                            <input type='name' className='form-control' id='floatingInput' placeholder='Ho Va Ten' />
                            <label for="floatingInput">Địa chỉ</label>
                        </div>
                        <div>
                            <Link to={"/cart"}>Giỏ hàng</Link>
                            <button className='btn btn-primary rounded-0 float-end'>Đặt hàng</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;