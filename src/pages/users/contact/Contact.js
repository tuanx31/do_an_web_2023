import "./Contact.scss"
import { useEffect } from 'react'


import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Contact = () => {
  useEffect(() => {
    document.title = "Liên Hệ"
  }, []);
  return (
    <>
      <div className="container lienhe">
        <div className="breadcrumb-small my-2">
          <Link to={"/"} className="text-dark">Trang chủ </Link>
          <span> / Liên Hệ</span>
        </div>
        <h4 className="mt-3 mb-1 fw-bold">LIÊN HỆ</h4>
        <div className="row mb-5">
          <div className="col-lg-4 col-12 mt-3">
            <p className="text-muted fs-16px fs-16px">Số điện thoại/Hotline</p>
            <p className="border-bottom pb-3 fs-14px ">
              <BsFillTelephoneFill className="me-1" />
              <span>0824892083</span>
            </p>
            <p className="text-muted fs-16px">Địa Chỉ</p>
            <p className="border-bottom fs-14px pb-3 ">

              <AiFillHome size={20} style={{ paddingBottom: "5px" }} className="me-1" />
              <span>
                Showroom: Số 19 ngõ 168 Trung Kính (Trần Kim Xuyến kéo dài), Yên Hòa,
                Cầu Giấy, Hà Nội. ĐKKD số 01G8030798 ngày 30/03/2021
              </span>
            </p>
            <p className="text-muted fs-16px">Địa Chỉ</p>
            <p className="border-bottom fs-14px pb-3">

              <AiFillHome size={20} style={{ paddingBottom: "5px" }} className="me-1" />
              <span>Kho: Ngách 1, ngõ 1150 đường Láng, Đống Đa, Hà Nội</span>
            </p>
            <p className="text-muted fs-16px">Email</p>
            <p className="border-bottom fs-14px pb-3">
              <MdEmail size={20} style={{ paddingBottom: "5px" }} className="me-1" />
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
            <textarea placeholder="Nội dung" style={{ height: "105px" }} className="border-bottom fs-14px" />
            <button className="btn btn-secondary w-25 rounded-0">Gửi</button>
          </div>
          <div className="col-lg-4 col-12 mt-3">
            <iframe title="ban do"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7560.45929607037!2d105.703639!3d18.653688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1700057328563!5m2!1svi!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* <img src={require("~/assest/users/img/contact/Screenshot 2023-10-30 231221.png")} alt="bando" /> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;