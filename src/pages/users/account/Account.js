import { Link } from "react-router-dom";
import "./style.scss"

const Account = () => {
    return (
        <>
            <div className="content container">
                <h1>
                    <Link to={"/admin"}>go to admin</Link>

                </h1>
            </div>
        </>

    )
}

export default Account;