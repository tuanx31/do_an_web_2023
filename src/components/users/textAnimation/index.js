import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./textAnimation.scss"


const TextAnimation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [typeEffect] = useTypewriter({
        words: ["UY TÍN TẠO NÊN THƯƠNG HIỆU", "70 NĂM KINH NGHIỆM ", "SỐ LƯỢNG, MẪU MÃ ĐA DẠNG"],
        loop: {},
        typeSpeed: 110,
        deleteSpeed: 70,
    })

    return (
        <div className="TextAnimation">
            <h3> <span> TUNA SHOP-</span> <span>{typeEffect}</span></h3>
        </div>
    )
}
export default TextAnimation;