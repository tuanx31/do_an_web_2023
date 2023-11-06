import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Introduce.scss"

import { useEffect } from 'react'
const Introduce = () => {
    useEffect(() => {
        document.title = "Giới thiệu";
    }, [])
    return (
        <Container>
            <div className="breadcrumb-small my-2">
                <Link to={"/"} className="text-dark">Trang chủ </Link>
                <span> / Giới thiệu</span>
            </div>
            <div className="mb-1 mt-3 inner mb-5">
                <h3 className="text-uppercase">Giới Thiệu</h3>
                <p><img src={require('~/assest/users/img/gioithieu/gioithieu.jpg')} alt="" /></p>
                <p>Tuna Shop được ra đời vào tháng 10/2023 là thời điểm bùng nổ cho cách mạng công nghệ 4.0. Với sứ mệnh giúp khách hàng được trải nghiệm các công nghệ mới, các sản phẩm chất lượng cho một cuộc sống đơn giản. Các sản phẩm của Shop đặt ưu tiên hàng đầu về thiết kế TINH TẾ, ĐƠN GIẢN VÀ SANG TRỌNG.</p>
                <p>Tuna Shop là nơi bạn có thể tìm kiếm những sản phẩm công nghệ mới, độc đáo và chất lượng. Với tiêu chí kinh doanh đặt UY TÍN lên hàng đầu, chúng tôi luôn mong muốn khách hàng có được những trải nghiệm sản phẩm tốt nhất với chi phí hợp lý nhất. CAM KẾT CHẤT LƯỢNG SẢN PHẨM VÀ DỊCH VỤ LÀ SỐ 1.</p>
                <p>Mọi khách hàng đến với Tuna Shop đều được phục vụ như những thượng đế. Có những khách hàng lúc đầu còn rất lăn tăn về việc mua hàng Online cũng như chính sách đổi trả khi sản phẩm phát sinh lỗi ngoài mong muốn. Điều này thực sự là rất khó với Tuna Shop cho việc chinh phục được những khách hàng khó tính từ khắp các tỉnh thành đất nước. Tuy nhiên, bằng chính sự kiên nhẫn và chân thành, cho tới hiện tại, Tuna Shop đã có hơn 1.000 khách đặt hàng mỗi tháng cũng như hơn 100.000 lượt tương tác trên Fanpage và Website. Điều này thực sự làm chúng tôi cảm thấy tự hào và cần cố gắng để có thể phục vụ khách hàng được tốt hơn nữa về sau.</p>
                <p>Tuna Shop xin chân thành cảm ơn những khách hàng thân thiết của Shop. Chúc quý khách có những trải nghiệm thật an tâm, thật tốt khi mua sắm tại Tuna Shop.</p>
                <p>Mọi thắc mắc Quý khách có thể liện hệ:</p>
                <div className="text-primary">
                    <p>Tuna Shop</p>
                    <p>Hotline :<span className="text-danger">0824892083</span></p>
                    <p>Showroom: 108 Lê Duẩn, Thành phố Vinh,Nghệ An</p>
                    <p>Email: nguyendinhtuanx31@gmail.com</p>
                </div>

            </div>

        </Container>
    )
}

export default Introduce;