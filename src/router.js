import { Route, Routes, useLocation } from "react-router-dom"
import { ROUTERS } from "./utils/router"

import AdminMasterLayout from "~/pages/admin/theme/adminMasterLayout"
import AdminHome from "~/pages/admin/adminHome"
import AdminProduct from "~/pages/admin/adminProduct"

import Home from "./pages/users/Homepage/Home"
import Introduce from "./pages/users/Introduce"
import MasterLayout from "./pages/users/theme/masterLayout"
import Contact from "./pages/users/contact/Contact"
import Cart from "./pages/users/cart/Cart"
import Search from "./pages/users/search/Search"
import Account from "./pages/users/account/Account"
import Product from "~/pages/users/product"
import DetailProduct from "~/pages/users/detailProduct"
import Checkout from "~/pages/users/checkout"
import ChinhSachBaoHanh from "~/pages/users/chinhsachbaohanh"
import ChinhSachBaoMat from "~/pages/users/chinhsachbaomat"
import DieuKhoanDichVu from "~/pages/users/dieukhoandichvu"
import Login from "~/pages/users/login/Login"
import Register from "~/pages/users/register/Register"
import ThankYou from "~/pages/users/thankyou"




const renderUserRouter = () => {

    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <Home />
        },
        {
            path: ROUTERS.USER.INTRODUCE,
            component: <Introduce />
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: <Contact />
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart />
        },
        {
            path: ROUTERS.USER.SEARCH,
            component: <Search />
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <Product />
        },
        {
            path: ROUTERS.USER.DETAILPRODUCT,
            component: <DetailProduct />
        },
        {
            path: ROUTERS.USER.ACCOUNT,
            component: <Account />
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <Checkout />
        },
        {
            path: ROUTERS.USER.CSBH,
            component: <ChinhSachBaoHanh />
        },
        {
            path: ROUTERS.USER.CSBM,
            component: <ChinhSachBaoMat />
        },
        {
            path: ROUTERS.USER.DKDV,
            component: <DieuKhoanDichVu />
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login />
        },
        {
            path: ROUTERS.USER.REGISTER,
            component: <Register />
        },
        {
            path: ROUTERS.USER.THANKYOU,
            component: <ThankYou />
        }
    ]
    return (
        <>
            <MasterLayout>
                <Routes>
                    {userRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </MasterLayout>
        </>
    )
}

const renderAdminRouter = () => {
    const adminRouter = [
        {
            path: ROUTERS.ADMIN.HOME,
            component: <AdminHome />,
        },
        {
            path: ROUTERS.ADMIN.PRODUCT,
            component: <AdminProduct />,
        },
    ]
    return (
        <>
            <AdminMasterLayout>
                <Routes>
                    {adminRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </AdminMasterLayout>
        </>
    )
}


const RouteCustom = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    return isAdminRoute ? renderAdminRouter() : renderUserRouter();
};

export default RouteCustom;