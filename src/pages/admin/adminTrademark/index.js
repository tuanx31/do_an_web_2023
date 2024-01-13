import { MODULESPECIFIER_TYPES } from "@babel/types";
import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchdataTrademarks } from "~/service/admin/adminService";

const FixModal = (props) => {
    return (<>
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>SỬA THÔNG TIN</Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <div className="mb-3 form-floating">
                        <input type="text" className="form-control rounded-0" id="floatingInput" placeholder="Tên sản phẩm" />
                        <label htmlFor="floatingInput">Tên Thương hiệu</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="text" className="form-control rounded-0" id="floatingInput" placeholder="Kiểu dữ liệu" />
                        <label htmlFor="floatingInput">Thông tin</label>
                    </div>
                </Container>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-secondary">Đóng</Button>
                <Button onClick={props.onHide} >Lưu</Button>
            </Modal.Footer>
        </Modal>
    </>)
}
const AdminTradeMark = () => {
    const [dataTrademark, setdataTrademark] = useState([]);
    const fetchAllTrademark = async () => {
        const res = await fetchdataTrademarks()
        res && setdataTrademark(res);
    }
    const navigate = useNavigate()
    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        fetchAllTrademark()
        isAdmin === false && navigate("/")
    }, [isAdmin])

    const [fixModal, setFixModalShow] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    return (<>
        <Container className="my-5">
            <h1 className="text-danger text-center fw-bold"> Quản Lý Thương Hiệu</h1>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Xóa/ Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTrademark && dataTrademark.map((item, index) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button className='btn btn-warning ' onClick={() => { setFixModalShow(true); fetchdataTrademarks() }} >Sửa</button> <button className='btn btn-danger' >Xóa</button></td>
                        </tr>
                    )
                    )}

                </tbody>
            </Table>
        </Container>
        <FixModal
            show={fixModal}
            onHide={() => setFixModalShow(false)}
        />
    </>)
}
export default AdminTradeMark;