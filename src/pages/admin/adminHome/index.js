import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/js/dist/modal"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountProduct, getCountOrder, getCountUser } from "~/service/admin/adminService";

const AdminHome = (props) => {
    const navigate = useNavigate()
    const [CountProduct, setCountProduct] = useState(0);
    const [countOrder, setCountOrder] = useState(0);
    const [countUser, setCountUser] = useState(0);
    const getCount = async () => {
        const resp = await getCountProduct();
        resp && setCountProduct(resp);
        const reso = await getCountOrder();
        reso && setCountOrder(reso);
        const resu = await getCountUser();
        resu && setCountUser(resu);
    }
    const { isAdmin } = useSelector(state => state.account)
    useEffect(() => {
        getCount();
        isAdmin === false && navigate("/")
    }, [isAdmin])
    return (
        <>
            <Container className="my-5">
                <Row className="my-2">
                    <h1 className="text-center fw-bold text-uppercase"> trang Admin</h1>
                    <div>
                        <button className="btn btn-success float-end"><Link className="fw-bold text-white" to={"/"}>Đến trang client</Link></button>
                    </div>
                </Row>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Sl Sản Phẩm : {CountProduct}</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to={"/admin/product/1"}>View Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-info text-white mb-4">
                            <div className="card-body">SL Tài Khoản : {countUser}</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/admin/user">View
                                    Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">SL Đơn : {countOrder}</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/admin/order">View
                                    Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">Danger Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-area me-1"></i>
                                Area Chart Example
                            </div>
                            <div className="card-body"><canvas id="myAreaChart" width="100%"
                                height="40"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-bar me-1"></i>
                                Bar Chart Example
                            </div>
                            <div className="card-body"><canvas id="myBarChart" width="100%"
                                height="40"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default AdminHome;