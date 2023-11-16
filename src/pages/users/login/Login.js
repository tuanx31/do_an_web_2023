import { Container } from "react-bootstrap";
import "./login.scss"
import { Link } from "react-router-dom";
const Login = () => {
    return (<Container>
        <div className="wrapper">
            <a href="">
                <span className="icon-close">
                    <ion-icon name="close-outline" />
                </span>
            </a>
            <div className="form-box login">
                <h2>Đăng nhập</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail-outline" />
                        </span>
                        <input type="text" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline" />
                        </span>
                        <input type="password" required />
                        <label htmlFor="">Mật khẩu</label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Nhớ mật khẩu
                        </label>
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                    <button type="submit" className="btn">
                        Đăng nhập
                    </button>
                    <div className="login-register">
                        <p>
                            Bạn chưa có tài khoản?
                            <Link to={'/register'} className="register-link">
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    </Container>);
}

export default Login;