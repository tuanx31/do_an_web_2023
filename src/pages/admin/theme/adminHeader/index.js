import { Link } from "react-router-dom";

const AdminHeader = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/admin">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/admin/product">
                                product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/admin/order">
                                Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/admin/user">
                                User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>);
}

export default AdminHeader;