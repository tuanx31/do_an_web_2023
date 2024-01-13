import { Link } from "react-router-dom";
import "bootstrap/js/dist/collapse"
import "./adminheader.scss"
const AdminHeader = () => {
    return (<>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon text-white" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-success fw-bold" aria-current="page" to="/admin">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-success fw-bold" aria-current="page" to="/admin/product/1">
                                product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-success fw-bold" aria-current="page" to="/admin/order">
                                Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-success fw-bold" aria-current="page" to="/admin/user">
                                User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <nav className="adminheader navbar bg-transparent fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Admin dashboard</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin/product/1">
                                    Quản lý sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin/order">
                                    Quản lý đơn đặt hàng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin/user">
                                    Quản lý người dùng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin/category">
                                    Quản lý loại sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-black fw-bold text-uppercase" aria-current="page" to="/admin/trademark">
                                    Quản lý thương hiệu
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default AdminHeader;