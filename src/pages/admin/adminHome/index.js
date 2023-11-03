import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/modal"


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const AdminHome = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Container>
                trang asdmin
                <Link to={"/"}>go to client</Link>

                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch modal with grid
                </Button>

                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </Container>
        </>
    );
}

export default AdminHome;