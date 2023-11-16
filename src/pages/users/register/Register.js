import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (<Container>
        <div className="wrapper dangky">
            <a href="/boostrap.html">
                <span className="icon-close">
                    <ion-icon name="close-outline" />
                </span>
            </a>
            <div className="form-box register">
                <h2>Đăng ký</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail-outline" />
                        </span>
                        <input type="text" required="" />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="person-circle-outline" />
                        </span>
                        <input type="text" required="" />
                        <label htmlFor="">Tên người dùng</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline" />
                        </span>
                        <input type="password" required="" />
                        <label htmlFor="">Mật khẩu</label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Đồng ý Điều khoản và Dịch vụ
                        </label>
                    </div>
                    <button type="submit" className="btn">
                        Đăng ký
                    </button>
                    <div className="login-register">
                        <p>
                            Bạn đã có tài khoản?
                            <Link to={'/login'} className="register-link">
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    </Container>);
}

export default Register;