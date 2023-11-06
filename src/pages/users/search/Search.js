import { Container, Row } from "react-bootstrap";
import "./search.scss"
import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
    return (
        <Container>
            <Row>
                <p> Trang chủ/ Tìm kiếm</p>
                <div className=" timkiem">
                    <div className="input-group my-4 d-flex row ">
                        <div className="col-1 col-md-3 col-lg-4 "></div>
                        <div className="col  d-flex justify-content-center">
                            <input type="search" id="form1" className="form-control " aria-label="Search" placeholder="Search" />
                            <button type="button" className="btn btn-primary">
                                <AiOutlineSearch />
                            </button></div>
                        <div className="col-1 col-md-3 col-lg-4 "></div>

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