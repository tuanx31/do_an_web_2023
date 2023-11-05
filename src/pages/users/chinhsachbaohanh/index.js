import { Container } from "react-bootstrap";
import "./csbh.scss"
const ChinhSachBaoHanh = () => {
    return (<Container>
        <h4 className="fw-bold my-2"> CHÍNH SÁCH BẢO HÀNH</h4>
        <p style={{ color: "red" }}> 1. Chính sách bảo hành</p>
        <p> Tất cả các sản phẩm Macstore24h bán ra đều có chính sách bảo hành 01 ĐỔI 01 trong thời hạn 3 tháng đầu tiên nếu xảy ra lỗi của nhà sản xuất. Các sản phẩm sẽ được đổi mới không qua sửa chữa ngay khi sau khi Shop nhận được hàng bảo hành 01 ngày làm việc. Đây đang là chính sách bảo hành tốt nhất trên thị trường hiện nay mà Macstore24h mang đến cho Quý khách để quý khách có thể an tâm khi mua sắm tại Macstore24h.</p>
        <ul>
            <li>Lỗi nhà sản xuất được xác định như: Các lỗi tự nhiên phát sinh, không do tách động của con người ảnh hưởng đến chất lượng sản phẩm: VD như tai nghe Bluetooth không nhận, pin sạc dự phòng không sạc không vào pin.... </li>
            <li>Lỗi người dùng được xác định như: Các lỗi liên quan tới quá trình sử dụng của người dùng làm ảnh hưởng tới sự hoạt động bình thường của sản phẩm: VD làm rơi rớt sản phẩm, vô tình rơi vào nước hoặc để ở khu vực độ ẩm thấp làm đoản mạch sản phẩm ......</li>

        </ul>
        <p> Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.<span class="chu"> Hotline - 0982.213.268</span></p>
        <p style={{ color: "red" }}> 2. ĐIỀU KIỆN ĐỔI TRẢ</p>
        <p> Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
        <ul>
            <li> Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng. </li>
            <li> Không đủ số lượng, không đủ bộ như trong đơn hàng</li>
            <li> Tình trạng bên ngoài bị ảnh hưởng như rách bao bì,bong tróc,bể vỡ...</li>

        </ul>
        <p> Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </p>
        <p style={{ color: "red" }}>3. QUY ĐỊNH VỀ THỜI GIAN THÔNG BÁO VÀ GỬI SẢN PHẨM ĐỔI TRẢ</p>
        <ul>
            <li><span className="fw-bold">Thời gian thông báo đổi trả:</span> trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
            <li><span className="fw-bold">Thời gian gửi chuyển trả sản phẩm:</span> trong vòng 07 ngày kể từ khi nhận sản phẩm.</li>
            <li><span className="fw-bold">Địa điểm đổi trả sản phẩm:</span> Khách hàng có thể mang hàng trực tiếp đến cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
        </ul>
    </Container>);
}

export default ChinhSachBaoHanh;