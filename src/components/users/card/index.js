import { Card } from "react-bootstrap"
import "./card.scss"
const Cards = (props) => {
    const { imgurl, title, price, sale_of } = props;
    return (
        <>
            <Card className="shadow">
                <div className="sale_of position-absolute rounded-circle text-center text-white">-{sale_of}%</div>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-uppercase text-center mb-3">{title}</Card.Title>
                    <Card.Text className="d-flex justify-content-around text-truncate">
                        <strong >{price} $</strong> <span className="text-decoration-line-through float-end">950,000d</span>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <button className="btn btn-warning">Add to card</button>
                    <button className="btn btn-primary">buy</button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Cards;