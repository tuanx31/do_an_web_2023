import Home from "./pages/users/Homepage/Home"
import { ROUTERS } from "./utils/router"
import Introduce from "./pages/users/Introduce"
import { Route, Routes } from "react-router-dom"
import MasterLayout from "./pages/users/theme/masterLayout"
import Contact from "./pages/users/contact/Contact"
import Cart from "./pages/users/cart/Cart"
import Search from "./pages/users/search/Search"
import Account from "./pages/users/account/Account"
import Product from "~/pages/users/product"


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
            path: ROUTERS.USER.ACCOUNT,
            component: <Account />
        }
    ]
    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
}


const RouteCustom = () => {
    return renderUserRouter();
};

export default RouteCustom;