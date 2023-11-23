import { useEffect, useState } from "react";

import { Button, Container, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import { fetchOrder, fetchOrderDetailByIdOrder, deleteOrderDetail } from "~/service/admin/adminService";

import "./orderproduct.scss"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MyVerticallyCenteredModal(props) {
    const { data } = props
    let num = 1
    return (
        <Modal className="qldh"
            {...props}
            // fullscreen={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="fw-bold text-uppercase">
                    Đơn hàng
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table hover >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Id sp</th>
                            <th>Thumbnail</th>
                            <th>Tên Sp</th>
                            <th>Size</th>
                            <th>Màu sp</th>
                            <th>SL</th>
                            <th>Đơn giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{num++}</td>
                                <td>{item.product.id}</td>
                                <td><img src={"https://localhost:7139/resources/" + item.product.img} alt='' style={{ width: "80px" }} /></td>
                                <td>{item.product.name}</td>
                                <td>{item.size}</td>
                                <td>{item.color}</td>
                                <td>{item.amount}</td>
                                <td>{item.price.toLocaleString()}Đ</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const AdminOrderProduct = () => {
    const navigate = useNavigate()

    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        isAdmin === false && navigate("/")
    }, [isAdmin])
    const [Delshow, setDelShow] = useState(false);
    const [iddel, setiddel] = useState(null)



    const [modalShow, setModalShow] = useState(false);
    const [orderData, setOrderData] = useState([]);
    const fetchOrderp = async () => {
        const res = await fetchOrder()
        res && setOrderData(res)
    }
    useEffect(() => {
        fetchOrderp()
    }, [])

    const [Data, setData] = useState({});
    const fetchData = async (id_order) => {
        try {
            const data = await fetchOrderDetailByIdOrder(id_order)
            data && setData(data)
        } catch (error) {

        }
    }
    const handleClick = (id_order) => {
        setModalShow(true); fetchData(id_order)
    }
    const ComfirmDelete = async () => {
        if (iddel) {
            await deleteOrderDetail(iddel);
            fetchOrderp()
        }
        setDelShow(false)
    }
    const handleDelteProduct = (id) => {
        setDelShow(true)
        setiddel(id)

    }
    return (<Container>
        <h1 className="fw-bold text-center text-danger">Quản lý đơn hàng</h1>
        <Table hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Sdt</th>
                    <th>Địa chỉ giao</th>
                    <th>Tổng tiền</th>
                    <th>Tạo ngày</th>
                    <th>Detail</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                {orderData && orderData.length > 0 && orderData.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nameCustomer}</td>
                        <td>{item.emailCustomer}</td>
                        <td>{item.phoneCustomer}</td>
                        <td>{item.address}</td>
                        <td>{item.total.toLocaleString()} đ</td>
                        <td>{item.createAt}</td>
                        <td><button className="btn btn-sm btn-success" onClick={() => handleClick(item.id)}>Xem</button></td>
                        <td><button className="btn btn-sm btn-danger" onClick={() => handleDelteProduct(item.id)}>Xóa</button></td>

                    </tr>
                ))}
            </tbody>
        </Table>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={Data || []}
        />
        <Modal
            show={Delshow}
            onHide={() => { setDelShow(false); setiddel(null) }}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Xoá đơn hàng ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Xác nhận xóa
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setDelShow(false); setiddel(null) }}>
                    Close
                </Button>
                <Button variant="danger" onClick={ComfirmDelete} >Xóa</Button>
            </Modal.Footer>
        </Modal>
    </Container>);
}

export default AdminOrderProduct;