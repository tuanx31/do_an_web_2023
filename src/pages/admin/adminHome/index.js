import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/modal"

const AdminHome = (props) => {

    return (
        <>
            <Container>
                trang asdmin
                <Link to={"/"}>go to client</Link>
            </Container>
        </>
    );
}

export default AdminHome;