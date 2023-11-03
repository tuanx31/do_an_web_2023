import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <>
            <Container>
                <div className="my-2"><Link className="text-dark" to={"/"}>Trang chủ /</Link>Giỏ hàng</div>
                <h4 className="fw-bold text-uppercase my-4"> Giỏ hàng </h4>
                <Row>

                </Row>
            </Container>
        </>
    )
}

export default Cart;