import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { fetchdataTrademarks, addTradeMarks, deleteTradeMarks } from "~/service/admin/adminService";

const inittrademarks =
{
    name: " ",
    description: " "
}
const AddTradeMarks = (props) => {
    const [data, setdata] = useState(inittrademarks);
    const addNewTradeMarks = async () => {
        try {
            await addTradeMarks(data)
            props.onHide();
            toast.success("them thanh cong")
            setdata(inittrademarks)
        } catch (error) {
            toast.error("that bai")
        }

    }
    return (<>
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title className="text-center fw-bold w-100">THÊM THƯƠNG HIỆU</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control rounded-0" id="floatingInput" value={data.name} onChange={e => setdata({ ...data, name: e.target.value })} placeholder="Them thuong hieu" />
                    <label htmlFor="floatingInput">Tên thương hiệu</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control rounded-0" id="floatingInput" value={data.description} onChange={e => setdata({ ...data, description: e.target.value })} placeholder="Them thuong hieu" />
                    <label htmlFor="floatingInput">Thông tin</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-secondary">Đóng</Button>
                <Button onClick={() => { addNewTradeMarks() }} className="btn-warning" >Thêm</Button>
            </Modal.Footer>
        </Modal>
    </>)
}


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
const DeleteModal = (props) => {
    return (<>
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold w-100 text-center">XÓA THÔNG TIN</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center fw-bold text-danger" >
                <h5> Xác nhận xóa ?</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-secondary">Đóng</Button>
                <Button onClick={props.delete} className="btn-danger" >Xóa</Button>
            </Modal.Footer>
        </Modal>
    </>)
}
const AdminTradeMark = () => {

    const [fixModal, setFixModalShow] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);
    const [addModal, setaddModal] = useState(false)
    const [dataTrademark, setdataTrademark] = useState([]);
    const [iddel, setiddel] = useState();
    const fetchAllTrademark = async () => {
        const res = await fetchdataTrademarks()
        res && setdataTrademark(res);
    }
    const handleDeleteTradeMark = async () => {
        try {
            await deleteTradeMarks(iddel)
            toast.success("Xóa thành công")
            setdeleteModal(false)
        } catch {
            toast.error("Thất bại")
        }
    }
    const navigate = useNavigate()
    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        fetchAllTrademark()
        isAdmin === false && navigate("/")
    }, [isAdmin, addModal, deleteModal])

    return (<>
        <Container className="my-5">
            <h1 className="text-danger text-center fw-bold"> Quản Lý Thương Hiệu</h1>
            <div className="d-flex justify-content-end ">
                <Button onClick={() => { setaddModal(true) }} >Thêm loại sản phẩm</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>Name</th>
                        <th>Thông tin</th>
                        <th>Sửa / Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTrademark && dataTrademark.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button className='btn btn-warning ' onClick={() => { setFixModalShow(true); fetchdataTrademarks() }} >Sửa</button> <button className='btn btn-danger' onClick={() => { setdeleteModal(true); setiddel(item.id) }} >Xóa</button></td>
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
        <DeleteModal
            show={deleteModal}
            onHide={() => setdeleteModal(false)}
            delete={() => handleDeleteTradeMark()}
        />
        <AddTradeMarks
            show={addModal}
            onHide={() => setaddModal(false)} />
    </>)
}
export default AdminTradeMark;