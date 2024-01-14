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
import { deleteUser } from "~/service/admin/adminService";
import { getRoles } from "~/service/admin/adminService";
import { EditUser } from "~/service/admin/adminService";
import { toast } from "react-toastify";

const initDataUser = {
    name: '',
    email: '',
    phone: '',
    role: '',
    roleOld: ''
}
const initdataRole = [{
    id: "",
    name: "",
    normalizedName: "",
    concurrencyStamp: ""
}]

function FixModal(props) {
    const { data } = props;
    const [dataUser, setDataUser] = useState({ initDataUser });
    const [id, setId] = useState();
    const setData = () => {
        data.user && setId(data.user.id)
        const dataTmp = {
            name: data.user && data.user.name,
            email: data.user && data.user.email,
            phone: data.user && data.user.phoneNumber,
            role: data.role && data.role[0],
            roleOld: data.role && data.role[0]
        }
        console.log(dataTmp);
        dataTmp && setDataUser(dataTmp);
    }
    useEffect(() => {
        setData();
    }, [data])
    const [dataRole, setDataRole] = useState(initdataRole);
    const getAllRole = async () => {
        const res = await getRoles()
        res && setDataRole(res);
    }
    const editUser = async (id) => {
        try {
            const res = await EditUser(id, dataUser)
            toast.success(res)
            console.log(res);
        } catch (error) {
            console.log(error);
            toast.error("Lỗi");
        }
    }
    useEffect(() => {
        getAllRole()
    }, [])
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
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={dataUser.name} onChange={e => setDataUser({ ...dataUser, name: e.target.value })} />
                                <label htmlFor="floatingInput" >Họ tên</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" value={dataUser.email} onChange={e => setDataUser({ ...dataUser, email: e.target.value })} id="floatingInput" />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={dataUser.phone} onChange={e => setDataUser({ ...dataUser, phone: e.target.value })} />
                                <label htmlFor="floatingInput">Số điện thoại</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <Form.Select aria-label="Default select example" value={dataUser.role} onChange={e => setDataUser({ ...dataUser, role: e.target.value })}>
                                    {dataRole.length > 0 && dataRole.map((item, index) => (
                                        <option value={item.name} key={index} selected={item.name === dataUser.role ? true : false}>{item.name}</option>
                                    ))}
                                </Form.Select>
                                <label htmlFor="floatingSelect">Group</label>
                            </div>
                        </form>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Đóng</Button>
                <Button variant="primary" onClick={() => { editUser(id) }}>Sửa</Button>
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
                <Button variant="danger" onClick={props.delete}>Xóa</Button>
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
                <span className="fw-bold">{data.role && data.role[0]}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
}

const AdminUser = () => {
    const [listdataUser, setlistDataUser] = useState([]);
    const navigate = useNavigate()
    const [dataUser, setdataUser] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [fixModalShow, setFixModalShow] = useState(false);
    const [deleteMoalShow, setDeleteMoalShow] = useState(false);
    const [emaildel, setEmaildel] = useState(null);
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
    }, [isAdmin, fixModalShow, deleteMoalShow])

    const deleteModal = (email) => {
        setDeleteMoalShow(true);
        setEmaildel(email)
    }
    const handleClick = () => {
        setModalShow(true);
    }
    const fixModal = () => {
        setFixModalShow(true);
    }
    const ComfirmDelete = async () => {
        if (emaildel) {
            await deleteUser(emaildel);
            fetchAllUser();
        }
        setDeleteMoalShow(false)
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
                            <td><button className='btn btn-warning ' onClick={() => { fixModal(); fetchAllUser(); getdataUser(item.email) }}>Sửa</button> <button className='btn btn-danger' onClick={() => deleteModal(item.email)}>Xóa</button></td>
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
            data={dataUser}
        />
        <DeleteModal
            show={deleteMoalShow}
            onHide={() => setDeleteMoalShow(false)}
            delete={ComfirmDelete}
        />
    </>)
}
export default AdminUser;