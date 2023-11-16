import { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import "./Cart.scss"


import { useSelector } from 'react-redux';
import CartItemProduct from '~/components/users/CartItemProduct';

import { useDispatch } from 'react-redux'
import * as actions from '~/store/actions';



const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { cartStore } = useSelector(state => state.cart)
    let total = 0
    cartStore.forEach(item => {
        total += (item.price - item.price * item.sale_of / 100) * item.soluong
    });
    useEffect(() => {
        document.title = "Tuna Shop-Giỏ Hàng"
    }, [])

    const handleCheckout = (data) => {
        dispatch(actions.Abate(data))
        navigate("/checkout");
    }

    return (
        <Container>
            <div className="my-2"><Link className="text-dark" to={"/"}>Trang chủ /</Link>Giỏ hàng</div>
            <h4 className="fw-bold text-uppercase my-4"> Giỏ hàng </h4>
            <Row>
                <table className="table" >
                    <thead >
                        <tr className="text-center">
                            <th scope="col" className="text-muted fw-normal" >Hình ảnh</th>
                            <th scope="col" className="text-muted fw-normal">Thông tin chi tiết sản phẩm</th>
                            <th scope="col" className="text-muted fw-normal">Đơn giá</th>
                            <th scope="col" className="text-muted fw-normal">Số lượng</th>
                            <th scope="col" className="text-muted fw-normal">Tổng giá</th>
                            <th scope="col" className="text-muted fw-normal">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartStore && cartStore.length > 0 && cartStore?.map((item, index) => (
                            <CartItemProduct key={index} item={item} />
                        ))
                        }
                    </tbody>
                </table>
            </Row>
            <Row className="mt-3 " >
                <div className="mb-3 ">
                    <p>Ghi chú cho đơn hàng</p>
                    <div className="form-floating">
                        <textarea id="floatingTextarea2" className="form-control text-muted" style={{ height: "100px" }} />
                        <label htmlFor="floatingTextarea2" >Ghi chú cho đơn hàng.</label>
                    </div>

                </div>
                <div>
                    <div className="float-end text-end d-flex align-items-end gap-1 flex-column mb-5">
                        <p ><span>Tổng tiền</span> <span className="fw-bold">{parseInt(total).toLocaleString()} Đ</span></p>
                        <i>Vận chuyển</i>
                        <button className="btn btn-primary" onClick={() => handleCheckout(cartStore)}>Thanh toán</button>
                    </div>
                </div>
            </Row>

        </Container>
    )
}

export default Cart;