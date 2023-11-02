import { Link } from "react-router-dom";
import "./style.scss"

const Account = () => {
    return (
        <>
            <div className="content container">
                <h1>
                    <Link to={"/admin"}>go to admin</Link>
                    <img src="https://localhost:7139/resources/4fbe731f-1591-46b2-9e52-8ddc8636e291.jpeg" alt="" />
                </h1>
            </div>
        </>

    )
}

export default Account;