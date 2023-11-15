import { Card } from "react-bootstrap"
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import "./card.scss"
import { Link } from "react-router-dom";
import * as actions from '~/store/actions';

import { useDispatch } from 'react-redux'
import { handleArray } from "~/service/tools";
const Cards = (props) => {
    const { imgurl, title, price, sale_of, id, idCategory, fulldata } = props;
    const dispatch = useDispatch()
    let color = handleArray(fulldata.color)[0] || ""
    let sizeCart = handleArray(fulldata.size)[0] || ""
    const handleAddtoCart = () => {
        dispatch(actions.addToCart({ ...fulldata, colorCart: color, sizeCart }))
        toast.success("Thêm vào giỏ hàng thành công!");
    }
    return (
        <>
            <Card className="shadow">
                <div className="sale_of position-absolute rounded-circle text-center text-white"><p>-{sale_of ? sale_of : 0}%</p></div>
                <Link to={`/products/${idCategory}/detail/${id}`} variant="top">
                    <Card.Img src={imgurl} />
                </Link>
                <Card.Body >
                    <Link to={`/products/${idCategory}/detail/${id}`} className="d-flex flex-column justify-content-between text-dark">
                        <Card.Title className="text-uppercase text-center mb-3 ">{title}</Card.Title>
                        <Card.Text className="d-flex justify-content-around text-truncate">
                            <strong >{(sale_of ? price - price * sale_of / 100 : price).toLocaleString()}đ</strong> <span className="text-decoration-line-through float-end">{price.toLocaleString()}đ</span>
                        </Card.Text>
                    </Link>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <button className="btn btn-outline-warning btn-add-card" onClick={() => handleAddtoCart()}><IoCartOutline size={20} /></button>
                    <button className="btn btn-outline-primary ">Mua Ngay</button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Cards;