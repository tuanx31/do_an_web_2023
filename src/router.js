import Home from "./pages/users/Homepage/Home"
import { ROUTERS } from "./utils/router"
import Introduce from "./pages/users/Introduce/Introduce"
import { Route, Routes } from "react-router-dom"
import MasterLayout from "./pages/users/theme/masterLayout"
import Contact from "./pages/users/contact/Contact"


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