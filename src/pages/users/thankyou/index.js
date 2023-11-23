
import './thanks.scss'

const ThankYou = () => {
  return (<>
    <div className="container thanks">
      <div>
        <h1 className="h1"><u><b>CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG</b></u></h1>
      </div>
      <div className="h2">
        <i className="far fa-check-circle"> <b>đặt hàng thành công</b></i>
      </div>
      <div><h2 className="h3"> Thông tin khách hàng: </h2>
        <ul>
          <li>Tên: Nguyễn Thị Khánh Linh </li>
          <li>Số điện thoại: 0989722456</li>
          <li>Địa chỉ: 24 Hồ Tùng Mậu, Hoàn Kiếm, Hà Nội</li>
          <li>Email: khanhlinh200@gmail.com</li>
        </ul>
      </div>
      <div className="container mt-3">
        <h2>Thông Tin Sản Phẩm: </h2>
        <p>Đã bao gồm mã giảm giá</p>
        <table className="table table-active">
          <thead>
            <tr>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Túi xách</td>
              <td>69.000đ</td>
              <td>01</td>
              <td>55.000đ</td>
            </tr>
            <tr>
              <td>Sạc dự phòng</td>
              <td>355.000đ</td>
              <td>01</td>
              <td>320.000đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>);
}

export default ThankYou;