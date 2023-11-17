import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


import { fetchOrder } from "~/service/admin/adminService";
const AdminOrderProduct = () => {
    const [orderData, setOrderData] = useState([]);
    const fetchOrderp = async () => {
        const res = await fetchOrder()
        res && setOrderData(res)
    }
    useEffect(() => {
        fetchOrderp()
        console.log(orderData)
    }, [])
    return (<Container>
        <h1 className="fw-bold text-center text-danger">Quản lý đơn hàng</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Họ tên</th>
                    <th>email</th>
                    <th>sdt</th>
                    <th>Địa chỉ giao</th>
                    <th>Tổng tiền</th>
                    <th>Tạo ngày</th>
                    <th>detail</th>
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
                        <td><button className="btn btn-sm btn-success">Xem</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>);
}

export default AdminOrderProduct;