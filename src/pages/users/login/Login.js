import { Container } from "react-bootstrap";
import "./login.scss"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import { validateInput } from "~/service/tools";
const Login = () => {
    const [error, seterror] = useState({});
    useEffect(() => {
        document.title = "Tuna Shop - Đăng nhập"
    }, [])
    const itnitData = {
        email: "",
        password: ""
    }
    const [dataLogin, setDataLogin] = useState(itnitData);

    const handleChangeEmail = (data) => {
        const newData = _.cloneDeep(dataLogin)
        newData.email = data
        setDataLogin(newData)
    }
    const handleChangePass = (data) => {
        const newData = _.cloneDeep(dataLogin)
        newData.password = data
        setDataLogin(newData)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        seterror(validateInput(dataLogin))
        if (validateInput(dataLogin).email || validateInput(dataLogin).password) {
            return
        }
    }

    return (<Container>
        <div className="wrapper">
            <a href="">
                <span className="icon-close">
                    <ion-icon name="close-outline" />
                </span>
            </a>
            <div className="form-box login">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail-outline" />
                        </span>
                        <input type="text" required value={dataLogin.email} onChange={(e) => handleChangeEmail(e.target.value)} />
                        <label htmlFor="">Email</label>
                        {error.email && <p className="text-danger fs-14px">{error.email}</p>}
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline" />
                        </span>
                        <input type="password" required value={dataLogin.password} onChange={(e) => handleChangePass(e.target.value)} />
                        <label htmlFor="">Mật khẩu</label>
                        {error.password && <p className="text-danger fs-14px">{error.password}</p>}
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Nhớ mật khẩu
                        </label>
                        <a href="">Quên mật khẩu?</a>
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