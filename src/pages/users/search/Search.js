import { Col, Container, Row } from "react-bootstrap";
import "./search.scss"
import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
    return (
        <Container>
            <Row>
                <p> Trang chủ/ Tìm kiếm</p>
                <div className="d-flex gap-3 justify-content-center">
                    <div className="input-group my-4 d-flex w-25">
                        <input type="search" id="form1" className="form-control " aria-label="Search" placeholder="Search" />
                        <button type="button" className="btn btn-primary">
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
                <div>
                    <p className="d-flex  align-items-center justify-content-center  fs-4 bg-light " style={{ height: "40px" }}>CÓ 31 SẢN PHẨM VỚI TỪ KHÓA: MACBOOK</p>
                </div>
            </Row>


        </Container>
    )
}


export default Search;