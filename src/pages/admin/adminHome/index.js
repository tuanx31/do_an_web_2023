import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/js/dist/modal"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminHome = (props) => {
    const navigate = useNavigate()

    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        isAdmin == false && navigate("/")
    }, [isAdmin])
    return (
        <>
            <Container className="my-5">
                trang asdmin
                <Link to={"/"}>go to client</Link>
            </Container>
        </>
    );
}

export default AdminHome;