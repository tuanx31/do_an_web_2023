import { Col, Container, Row } from 'react-bootstrap';
import './checkout.scss'
import { Link } from 'react-router-dom';
// import logo from "~/assest/logo/logo1.png"


import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import Customerdata from './customerdata';


const Checkout = () => {
    useEffect(() => {
        document.title = "Tuna Shop - Checkout"
    }, [])
    const { oderStore, note } = useSelector(state => state.checkout)
    console.log("product ::", oderStore)
    console.log("check note : ", note)
    let total = 0
    oderStore.forEach(item => {
        total += (item.price - item.price * item.sale_of / 100) * item.soluong
    });
    return (
        <Container className='mb-5'>
            {/* <div>
                <img src={logo} alt='' style={{ width: "150px", height: "100px" }} />
            </div> */}
            <div className="mt-3"><Link className='text-black' >Giỏ hàng /</Link>Thanh Toán</div>
            <h4 className='fw-bold mt-4 text-uppercase'>Thông Tin Thanh Toán</h4>
            <Row className='gap-5 flex-row-reverse'>
                <Col sm={6} className='col-12'>
                    {oderStore.map((item, index) => (
                        <div key={index} className='d-flex gap-3 justify-content-between border-bottom py-2'>
                            <img src={"https://localhost:7139/resources/" + item.img} width={65} height={65} alt='hinhN' />
                            <div >
                                <div className='productTitle'>{item.name} X {item.soluong}</div>
                                <div>{item?.colorCart} {item?.sizeCart}</div>
                                <div className='text-muted'>{item.trademarks && item.trademarks.name}</div>

                            </div>
                            <div className='d-flex align-items-center' style={{ whiteSpace: "nowrap" }}>{item && item.price && ((item.price - item.price * item.sale_of / 100) * item.soluong).toLocaleString()} đ</div>
                        </div>
                    ))}

                    <div className='d-flex justify-content-between my-3'>
                        <input className='form-control w-75' placeholder='Mã giảm giá' />
                        <button className='btn btn-primary'>Sử dụng</button>
                    </div>
                    <div className='py-4 border-top border-bottom'>
                        <div className='d-flex justify-content-between mb-2 fs-14px'><span>Tạm tính</span><span>{parseInt(total).toLocaleString()} Đ</span></div>
                        <div className='d-flex justify-content-between fs-14px'><span>Phí Ship</span><span>free</span></div>
                    </div>
                    <div className='d-flex justify-content-between mt-2 h5'><span>Tổng tiền</span><span>{parseInt(total).toLocaleString()} Đ</span></div>
                </Col>
                <Col>
                    <Customerdata />
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;