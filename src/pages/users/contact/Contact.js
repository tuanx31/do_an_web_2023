import "./Contact.scss"

import {BsFillTelephoneFill} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

const Contact = () => {
    return (
        <>
        <div className="container lienhe">
  <p className="my-2">Trang chủ/ Liên hệ</p>
  <h4 className="mt-4 mb-1 fw-bold">LIÊN HỆ</h4>
  <div className="row mb-5">
    <div className="col-lg-4 col-12 mt-3">
      <p className="text-muted fs-16px fs-16px">Số điện thoại/Hotline</p>
      <p className="border-bottom pb-3 fs-14px ">
        <BsFillTelephoneFill className="me-1"/>
        <span>0824892083</span>
      </p>
      <p className="text-muted fs-16px">Địa Chỉ</p>
      <p className="border-bottom fs-14px pb-3 ">
     
        <AiFillHome size={20} style={{paddingBottom : "5px"}} className="me-1"/>
        <span>
          Showroom: Số 19 ngõ 168 Trung Kính (Trần Kim Xuyến kéo dài), Yên Hòa,
          Cầu Giấy, Hà Nội. ĐKKD số 01G8030798 ngày 30/03/2021
        </span>
      </p>
      <p className="text-muted fs-16px">Địa Chỉ</p>
      <p className="border-bottom fs-14px pb-3">
     
        <AiFillHome size={20} style={{paddingBottom :"5px"}} className="me-1"/>
        <span>Kho: Ngách 1, ngõ 1150 đường Láng, Đống Đa, Hà Nội</span>
      </p>
      <p className="text-muted fs-16px">Email</p>
      <p className="border-bottom fs-14px pb-3">
        <MdEmail size={20} style={{paddingBottom : "5px"}} className="me-1"/>
        <span>nguyendinhtuanx31@gmail.com</span>
      </p>
    </div>
    <div className="col-lg-4 col-12 d-flex flex-column gap-5 mt-3">
      <input
        placeholder="Họ tên của bạn"
        className="fs-14px shadow-none border-bottom"
      />
      <input
        placeholder="Địa chỉ email của bạn"
        type="email"
        className="border-bottom fs-14px"
      />
      <input
        placeholder="Số điện thoại của bạn"
        className="border-bottom fs-14px"
      />
      <textarea placeholder="Nội dung" style={{height : "105px"}} className="border-bottom fs-14px" />
      <button className="btn btn-secondary w-25 rounded-0 btn-sm">Gửi</button>
    </div>
    <div className="col-lg-4 col-12 mt-3">
      <img src={require("~/assest/users/img/contact/Screenshot 2023-10-30 231221.png")} alt="bando" />
    </div>
  </div>
</div>

        </>
    )
}

export default Contact;