import { Container } from "react-bootstrap";
import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import { validateInput } from "~/service/tools";
import { LoginUser } from "~/service/users/accountService";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux'
import * as actions from '~/store/actions';




const Login = () => {

    const { isAuthenticate } = useSelector(state => state.account)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, seterror] = useState({});
    useEffect(() => {
        isAuthenticate && navigate("/")
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

    const handleLogin = async (e) => {
        e.preventDefault()
        seterror(validateInput(dataLogin))
        if (validateInput(dataLogin).email || validateInput(dataLogin).password) {
            return
        }
        let data = {
            email: dataLogin.email,
            password: dataLogin.password
        }
        try {
            const res = await LoginUser(data)
            const token = res.item1
            const groupname = res.item2.groupname
            const dataUser = res.item2
            const dataAuthen = {
                authen: true,
                token: token,
                data: dataUser,
                isAdmin: groupname === "Admin" ? true : false
            }
            dispatch(actions.SaveLogin(dataAuthen))
            toast.success("Đăng nhập thành công")
            navigate("/account")
        } catch (error) {
            toast.error("Email hoặc mật khẩu không chính xác")
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