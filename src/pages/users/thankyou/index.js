
import { Link, useParams } from 'react-router-dom';
import './thanks.scss'
import { getOrderProductbyId } from '~/service/users/checkout';
import { useEffect, useState } from 'react';
import { fetchOrderDetailByIdOrder } from '~/service/admin/adminService';



const ThankYou = () => {
  const { idOrder } = useParams();
  const [dataOrder, setDataOrder] = useState();
  const [dataOrderDetail, setDataOrderDetail] = useState();
  const fetchDataOrder = async () => {
    const res = await getOrderProductbyId(idOrder)
    res && setDataOrder(res)
  }
  const fetOrderDetail = async () => {
    const data = await fetchOrderDetailByIdOrder(idOrder)
    data && setDataOrderDetail(data)
  }
  useEffect(() => {
    fetchDataOrder()
    fetOrderDetail()
  }, [idOrder, dataOrder])
  return (<>
    <div className="container thanks">
      <div>
        <h1 className="h1 mt-4 my-2"><b>CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG</b></h1>
      </div>
      <div className="h2">
        <i className="far fa-check-circle"> <b>đặt hàng thành công</b></i>
      </div>
      <div><h2 className="h3"> Thông tin khách hàng: </h2>
        <ul>
          <li>Họ tên: {dataOrder && dataOrder.user.name} </li>
          <li>Số điện thoại: {dataOrder && dataOrder.user.phoneNumber}</li>
          <li>Địa chỉ:  {dataOrder && dataOrder.address}</li>
          <li>Email: {dataOrder && dataOrder.user.email}</li>
        </ul>
      </div>
      <div className="container mt-3">
        <h2>Thông Tin Sản Phẩm: </h2>
        <p>Đã bao gồm mã giảm giá</p>
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
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <Link to={'/'}>Tiếp tục mua hàng </Link>
          <h5 className='fw-bold'>Tổng tiền : {dataOrder && dataOrder.total.toLocaleString()} VND</h5>
        </div>

      </div>
    </div>
  </>);
}

export default ThankYou;