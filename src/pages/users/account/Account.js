import { useNavigate } from "react-router-dom";
import "./style.scss"
import * as actions from '~/store/actions';

import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import DonHang from "~/components/users/donhang";

const Account = () => {
    const navigate = useNavigate()
    const { isAuthenticate, dataUser, isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        isAuthenticate === false && navigate("/login")
    }, [isAuthenticate])
    const dispatch = useDispatch()

    const handleclick = () => {
        dispatch(actions.LogOut())
    }

    // const { data } = useSelector(state => state.cart)
    // console.log(data)
    return (
        <Container>
            <div className="content d-flex justify-content-between">
                <h1>Xin chào <span className="text-danger">{dataUser && dataUser.name}</span></h1><Button variant="primary" className="my-2" onClick={handleclick}>
                    Đăng xuất
                </Button>



            </div>
            {isAdmin && <h1>
                <a href={"/admin"}><button className="btn btn-lg btn-success rounded-0">go to admin</button></a>
            </h1>}
            <DonHang />
        </Container>

    )
}

export default Account;