import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./textAnimation.scss"


const TextAnimation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [typeEffect] = useTypewriter({
        words: ["Tuna shop- Uy tín tạo nên thương hiệu"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 30
    })

    return (
        <div className="TextAnimation">
            <h1>{typeEffect}</h1>
        </div>
    )
}
export default TextAnimation;