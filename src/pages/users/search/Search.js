import { Container, Row } from "react-bootstrap";
import "./search.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { useSelector } from "react-redux";
import renderCard from './../../../service/users/renderproduct/index';
import { Link } from "react-router-dom";



const Search = () => {

    const { searchData, keyword } = useSelector(state => state.search)
    console.log(searchData, keyword)

    return (
        <Container>

            <Row>
                <p className="mt-2"><Link className="text-dark" to={"/"}>Trang chủ</Link> / Tìm kiếm</p>
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
                    <p className="d-flex  align-items-center justify-content-center  fs-4 bg-light text-uppercase" style={{ height: "40px" }}> {searchData.length > 0 ? `CÓ ${searchData.length} SẢN PHẨM VỚI TỪ KHÓA: ${keyword}` : "KHÔNG CÓ SẢN PHẨM NÀO "}</p>
                </div>
                {renderCard(searchData)}
            </Row>

        </Container>
    )
}


export default Search;