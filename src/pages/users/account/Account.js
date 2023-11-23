import { Link, useNavigate } from "react-router-dom";
import "./style.scss"
import * as actions from '~/store/actions';

import { useDispatch, useSelector } from 'react-redux'
import { Button } from "react-bootstrap";
import { useEffect } from "react";

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
        <>
            <div className="content container">
                <h1>Xin chào {dataUser && dataUser.name}</h1>
                {isAdmin && <h1>
                    <a href={"/admin"}>go to admin</a>
                </h1>}
                <Button variant="primary" className="my-2" onClick={handleclick}>
                    Đăng xuất
                </Button>

            </div>
        </>

    )
}

export default Account;