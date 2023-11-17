import "./checkout.scss"
import { Link } from "react-router-dom";

const Customerdata = () => {
    return (<>
        <p><span>Bạn đã có tài khoản? </span> <Link style={{ cursor: "pointer" }} to={"/login"} className='dangnhap'>Đăng nhập</Link></p>
        <div>
            <div className='form-floating my-3 ' >
                <input type='text' className='form-control' placeholder='Họ và tên' />
                <label htmlFor="floatingInput">Họ và tên</label>
            </div>

            <div className="d-flex flex-row bd-highlight gap-2" >
                <div className='form-floating my-2 w-75 bd-highlight '>
                    <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className='form-floating my-2  flex-shrink-2 bd-highlight'>
                    <input type='email' className='form-control' id='floatingInput' placeholder='Nhap so dien thoai cua ban' />
                    <label htmlFor="floatingInput">Điện thoại</label>
                </div>
            </div>
            <div className='form-floating my-3 ' >
                <input type='name' className='form-control' id='floatingInput' placeholder='Ho Va Ten' />
                <label htmlFor="floatingInput">Địa chỉ</label>
            </div>
            <div className='my-4'>
                <Link to={"/cart"}>Giỏ hàng</Link>
                <button className='btn btn-primary float-end'>Đặt hàng</button>
            </div>
        </div>

    </>);
}

export default Customerdata;