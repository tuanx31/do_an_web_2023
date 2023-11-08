import './productCollection.scss'

import Slider from "react-slick";
import Cards from '../card';


const ProductCollection = (props) => {
    const { data } = props;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (<>
        <Slider {...settings}>
            {data?.map((item, index) => (
                <div>
                    <div className='p-3 pt-2 pb-5'>
                        <Cards key={item.id || index} imgurl={"https://localhost:7139/resources/" + item.img} title={item?.name} price={item?.price} sale_of={item?.sale_of} id={item?.id} idCategory={item.id_category} />
                    </div>
                </div>
            ))}
        </Slider>
    </>);
}

export default ProductCollection;