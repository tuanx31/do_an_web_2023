import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrderProductbyEmail } from "~/service/users/checkout";
import { fetchOrderDetailByIdOrder } from '~/service/admin/adminService';

import { useSelector } from 'react-redux'
import { handleDateTime } from "~/service/tools";

const Chitietdonhang = (props) => {
    const { idOrder } = props
    const [dataOrderDetail, setdataOrderDetail] = useState([]);
    const fetOrderDetail = async () => {
        const res = await fetchOrderDetailByIdOrder(idOrder)
        res && setdataOrderDetail(res)
    }
    useEffect(() => {
        fetOrderDetail();

    }, [idOrder]);
    return (
        <table className="table table-hover">
            <thead>
                <tr className='text-center' style={{ verticalAlign: "middle" }}>
                    <th>Hình ảnh</th>
                    <th>Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá</th>
                    <th>Thành Tiền</th>
                </tr>
            </thead>
            <tbody>

                {dataOrderDetail && dataOrderDetail.map((item, index) => (
                    <tr className='text-center' key={index} style={{ verticalAlign: "middle" }}>
                        <td><img src={"https://localhost:7139/resources/" + item.product.img} alt="hinh anh" style={{ width: "120px", height: "120px" }} /></td>
                        <td className="text-muted fw-normal" ><Link to={`/products/${item.product.id_category}/detail/${item.id_product}`} className='text-black'>{item?.product.name}</Link><p className='mt-1'>{item?.color} {item?.size}</p></td>
                        <td><span className='fw-bold'>{item.amount}</span></td>
                        <td><span className='fw-bold'>{item.price.toLocaleString()} VND</span></td>
                        <td><span className='fw-bold'>{(item.price * item.amount).toLocaleString()} VND</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const DonHang = () => {

    const { dataUser } = useSelector(state => state.account)
    const [dataOrder, setDataOrder] = useState();

    const fetchDataOrder = async () => {
        const res = await getOrderProductbyEmail(dataUser.email)
        res && setDataOrder(res)
        dataOrder && console.log(dataOrder)
    }
    let num = 1
    useEffect(() => {
        fetchDataOrder();
    }, [])
    return (<div >
        <h3 className="fw-bold">Đơn hàng đã mua</h3>
        {dataOrder && dataOrder.map((item, index) => (

            <div className="my-5 border-bottom border-4 " key={index}>
                <p className="fw-bold">Đơn hàng {num++}</p>
                <li >Địa chỉ:  {item.address}</li>
                <li>Thời gian tạo : {handleDateTime(item.createAt)}</li>
                <li>sdt : {item && item.user.phoneNumber}</li>
                <Chitietdonhang idOrder={item.id} />
                <h5 className="fw-bold">Tổng tiền : {item.total.toLocaleString()} VND</h5>
            </div>
        ))
        }
    </div>);
}

export default DonHang;