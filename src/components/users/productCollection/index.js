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
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (<>
        <Slider {...settings}>
            {data?.map((item, index) => (
                <div key={item.id || index}>
                    <div className='p-3 pt-2 pb-5'>
                        <Cards imgurl={"https://localhost:7139/resources/" + item.img} title={item?.name} price={item?.price} sale_of={item?.sale_of} id={item?.id} idCategory={item.id_category} fulldata={{ ...item, soluong: 1 }} />
                    </div>
                </div>
            ))}
        </Slider>

    </>);
}

export default ProductCollection;