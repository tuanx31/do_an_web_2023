import { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go"

import "./Cart.scss"

import * as actions from '~/store/actions';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
    const { cartStore } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleDeleteProduct = (item) => {
        dispatch(actions.deleteFromCart(item))
    }
    let total = 0
    cartStore.forEach(item => {
        total += (item.price - item.price * item.sale_of / 100) * item.soluong
    });
    useEffect(() => {
        document.title = "Tuna Shop-Giỏ Hàng"
    }, [])
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
                            <tr className="text-center" style={{ verticalAlign: "middle" }}>
                                <th scope="row"><Link to={`/products/${item.id_category}/detail/${item.id}`}><img src={"https://localhost:7139/resources/" + item.img} alt="hinh anh" style={{ width: "120px", height: "120px" }} /></Link></th>
                                <td className="text-muted fw-normal" ><Link to={`/products/${item.id_category}/detail/${item.id}`} className='text-black'>{item?.name}</Link></td>
                                <td className="fw-bold dongia">{item.price && (item.price - item.price * item.sale_of / 100).toLocaleString()}</td>
                                <td><input type="number" min="0" style={{ width: "60px", height: "30px" }} value={item?.soluong} onChange={e => item.soluong = e.target.value} /></td>
                                <th>{item.price && ((item.price - item.price * item.sale_of / 100) * item.soluong).toLocaleString()}</th>
                                <td><GoTrash onClick={() => handleDeleteProduct(item)} style={{ cursor: "pointer" }} color="red" /></td>
                            </tr>
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
                        <label htmlFor="floatingTextarea2" >Ghi chú cho đơn hàng. Ví dụ: Thời gian giao hàng nhanh hơn...</label>
                    </div>

                </div>
                <div>
                    <div className="float-end text-end">
                        <p ><span>Tổng tiền</span> <span className="fw-bold">{parseInt(total).toLocaleString()} Đ</span></p>
                        <i>Vận chuyển</i>
                        <div className="d-flex gap-2 mt-2 mb-4 ">
                            <button className="btn btn-primary">Cập nhật</button>
                            <button className="btn btn-primary"><Link to={"/checkout"} className="text-white">Thanh toán</Link></button>
                        </div>
                    </div>

                </div>


            </Row>

        </Container>
    )
}

export default Cart;