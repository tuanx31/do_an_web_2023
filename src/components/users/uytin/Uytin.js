import { GiRibbonMedal } from 'react-icons/gi';
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsShieldFillCheck } from 'react-icons/bs'
import { PiNumberSquareSevenThin } from 'react-icons/pi'


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Uytin = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (<>
        <div style={{ background: "#f4f4f4" }} className=' py-4 row my-4' >
            <div data-aos="fade-up" className='fs-14px col-6 col-sm-3 text-center text-uppercase'><GiRibbonMedal size={35} className='me-1' color='#9f876b' />Hàng chính hãng</div>
            <div data-aos="fade-up" className='fs-14px col-6 col-sm-3 text-center text-uppercase'><LiaShippingFastSolid size={35} className='me-2' color='#9f876b' />Miễn phí vận chuyển</div>
            <div data-aos="fade-up" className='fs-14px col-6 col-sm-3 text-center text-uppercase'><BsShieldFillCheck size={35} className='me-2' color='#9f876b' />bảo hành 5 năm</div>
            <div data-aos="fade-up" className='fs-14px col-6 col-sm-3 text-center text-uppercase'><PiNumberSquareSevenThin size={35} className='me-2' color='#9f876b' />đổi hàng trong vòng 7 ngày</div>
        </div>
    </>)
}
export default Uytin