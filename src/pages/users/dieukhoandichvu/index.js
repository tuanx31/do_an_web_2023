import { Container } from "react-bootstrap";

const DieuKhoanDichVu = () => {
    return (<>
        <Container>
            <h4 className="my-2">
                <span className="fw-bold "> ĐIỀU KHOẢN DỊCH VỤ</span>
            </h4>
            <h5 style={{ color: "red" }}> 1.GIỚI THIỆU</h5>
            <p> Chào mừng quý khách hàng đến với website chúng tôi.</p>
            <p>
                {" "}
                Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý
                khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa,
                thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào
                bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web
                mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web,
                sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách
                chấp nhận với những thay đổi đó.
            </p>
            <p>
                Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của
                chúng tôi.
            </p>
            <h5 style={{ color: "red" }}>2.HƯỚNG DẪN SỬ DỤNG WEBSITE</h5>
            <p>
                Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập
                dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo
                có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo
                quy định hiện hành của pháp luật Việt Nam.{" "}
            </p>
            <p>
                {" "}
                Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ
                website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng
                cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
            </p>
            <h5 style={{ color: "red" }}>3.THANH TOÁN AN TOÀN AN TOÀN VÀ TIỆN LỢI</h5>
            <p>
                {" "}
                Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp
                dụng phương thức phù hợp:
            </p>
            <ol>
                <li> Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán).</li>
                <li>
                    {" "}
                    Thanh toán sau (COD - giao hàng và thu tiền tận nơi). Sau khi đã nhận hàng
                    kiểm tra và đồng ý mua hàng.
                </li>
                <li> Thanh toán online qua thẻ tín dụng, chuyển khoản</li>
            </ol>
        </Container>

    </>);
}

export default DieuKhoanDichVu;