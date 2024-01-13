import { Container, Table } from "react-bootstrap"

const AdminCategory = () => {
    return (<>
        <Container className="my-5">
            <h1 className="text-center text-danger fw-bold ">Quản Lý Loại Sản Phẩm</h1>
            <Table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th>Xóa/ Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>H1</th>
                        <th>Phụ kiện ô tô</th>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </>)
}
export default AdminCategory