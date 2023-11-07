import { Link } from "react-router-dom";
import "./style.scss"
import * as actions from '~/store/actions';

import { useDispatch, useSelector } from 'react-redux'
import { Button } from "react-bootstrap";




const Account = () => {
    const dispatch = useDispatch()

    const handleclick = () => {
        dispatch(actions.addToCart())
    }

    const { data } = useSelector(state => state.cart)
    console.log(data)
    return (
        <>
            <div className="content container">
                <h1>
                    <Link to={"/admin"}>go to admin</Link>


                </h1>
                <Button variant="primary" onClick={handleclick}>
                    click
                </Button>
            </div>
        </>

    )
}

export default Account;