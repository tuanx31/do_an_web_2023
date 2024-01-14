import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "~/service/admin/adminService";
import { getUserbyEmail } from "~/service/admin/adminService";
function FixModal(props) {
    return (
        <Modal   {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    SỬA THÔNG TIN
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <div>
                        <form>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" placeholder="Tên sản phẩm" />
                                <label htmlFor="floatingInput">Họ tên</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" placeholder="Giá sản phẩm" />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" placeholder=" Số lượng trong kho" />
                                <label htmlFor="floatingInput">Số điện thoại</label>
                            </div>
                            <div className="mb-3 form-floating">

                                <Form.Select aria-label="Default select example">

                                    <option value="1">Admin</option>
                                    <option value="2">Oder</option>
                                </Form.Select>
                                <label htmlFor="floatingSelect">Group</label>
                            </div>
                        </form>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Đóng</Button>
                <Button variant="primary" >Sửa</Button>
            </Modal.Footer>
        </Modal>
    )
}
function DeleteModal(props) {

    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header closeButton>
                <Modal.Title>Xoá người dùng ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Xác nhận xóa
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="danger" >Xóa</Button>
            </Modal.Footer>
        </Modal>
    )
}
function MyVerticallyCenteredModal(props) {
    const { data } = props

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="text-center w-100" >
                    Quyền người dùng
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <span className="fw-bold">{data.role[0]}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const AdminUser = () => {
    const [listdataUser, setlistDataUser] = useState([]);
    const navigate = useNavigate()
    const [dataUser, setdataUser] = useState({});
    const fetchAllUser = async () => {
        const res = await getAllUser();
        res && setlistDataUser(res);
    }
    const getdataUser = async (email) => {
        const res = await getUserbyEmail(email)
        res && setdataUser(res);
    }
    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        fetchAllUser();
        isAdmin === false && navigate("/")
    }, [isAdmin])

    const [modalShow, setModalShow] = useState(false);
    const [fixModalShow, setFixModalShow] = useState(false);
    const [deleteMoalShow, setDeleteMoalShow] = useState(false);

    const deleteModal = () => {
        setDeleteMoalShow(true);

    }
    const handleClick = () => {
        setModalShow(true);
    }
    const fixModal = () => {
        setFixModalShow(true);
    }


    let num = 1
    return (<>
        <Container className="my-5">
            <Table>
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Id</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Quyền</th>
                        <th scope="col">Xóa / Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {listdataUser && listdataUser.map((item, index) => (
                        <tr key={index}>
                            <td>{num++}</td>
                            <td className="text-truncate" style={{ maxWidth: "100px" }} >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td><button className='btn btn-success' onClick={() => { handleClick(item.email); getdataUser(item.email) }} >Xem</button></td>
                            <td><button className='btn btn-warning ' onClick={() => { fixModal(); fetchAllUser() }}>Sửa</button> <button className='btn btn-danger' onClick={() => deleteModal()}>Xóa</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>

        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={dataUser}
        />
        <FixModal
            show={fixModalShow}
            onHide={() => setFixModalShow(false)}
        />
        <DeleteModal
            show={deleteMoalShow}
            onHide={() => setDeleteMoalShow(false)}
        />
    </>)
}
export default AdminUser;