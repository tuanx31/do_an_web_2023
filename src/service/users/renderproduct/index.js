import Cards from "~/components/users/card"
import { Col } from "react-bootstrap"

function renderCard(item) {
    return (
        <>
            {
                item?.map((item, index) => (
                    <Col key={index} xl={3} lg={3} md={4} sm={6} xs={6} className="mb-4">
                        <Cards key={item.id || index} imgurl={item?.img} title={item?.title} price={item?.price} sale_of={item?.sale_of} id={item?.id} idCategory={item.id_category} />
                    </Col>
                ))
            }
        </>
    )
}

export default renderCard