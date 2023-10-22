import { Card } from "react-bootstrap"
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import "./card.scss"


const Cards = (props) => {
    const { imgurl, title, price, sale_of } = props;
    const handleAddtoCart = () => {
        toast.success("Add to cart susess!");
    }
    return (
        <>
            <Card className="shadow">
                <div className="sale_of position-absolute rounded-circle text-center text-white">-{sale_of ? sale_of : 0}%</div>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-uppercase text-center mb-3 ">{title}</Card.Title>
                    <Card.Text className="d-flex justify-content-around text-truncate">
                        <strong >{(sale_of ? price - price * sale_of / 100 : price).toLocaleString()}đ</strong> <span className="text-decoration-line-through float-end">{price.toLocaleString()}đ</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <button className="btn btn-warning btn-add-card" onClick={() => handleAddtoCart()}><IoCartOutline size={20} /></button>
                    <button className="btn btn-primary">Buy</button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Cards;