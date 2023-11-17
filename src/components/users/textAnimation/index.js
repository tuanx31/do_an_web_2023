import { useTypewriter } from "react-simple-typewriter";
import "./textAnimation.scss"

import bgimg from "~/assest/users/img/home/home1.png"
import { Row } from "react-bootstrap";

const TextAnimation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [typeEffect] = useTypewriter({
        words: ["UY TÍN TẠO NÊN THƯƠNG HIỆU", "70 NĂM KINH NGHIỆM ", "SỐ LƯỢNG, MẪU MÃ ĐA DẠNG"],
        loop: {},
        typeSpeed: 110,
        deleteSpeed: 70,
    })

    return (
        <>

            <div style={{ backgroundImage: `url(${bgimg})` }} className="TextAnimation">
                <h3> <span> TUNA SHOP-</span> <span>{typeEffect}</span></h3>
            </div>
            <div className="block_strengths container">


                <Row>


                    <div className="item col item1">
                        <div className="icon ">
                            <div className="iconInner">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        width="103px"
                                        height="103px"
                                        viewBox="0 0 103 103"
                                        enableBackground="new 0 0 103 103"
                                        xmlSpace="preserve"
                                    >
                                        <image
                                            id="image0"
                                            width={103}
                                            height={103}
                                            x={0}
                                            y={0}
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABnCAMAAAAqn6zLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC9FBMVEX9wCT////9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9 wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT9wCT/ ///mGuDyAAAA+nRSTlMAAA48aIysydzvFl6b1/bMpYRmUTAqICN4y/7gnmIoAwthxsp0KRqI8OaD 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 RU5ErkJggg=="
                                        ></image>
                                    </svg>
                                </span>
                            </div>
                            <div className="contentRight">
                                <h4>SHOP BẢO HÀNH ĐẠT</h4>
                                <p>TIÊU CHUẨN QUỐC TẾ</p>
                            </div>
                        </div>
                    </div>
                    <div className="item col item2">
                        <div className="icon">
                            <div className="iconInner2">
                                <span className="inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        width="123px"
                                        height="122px"
                                        viewBox="0 0 123 122"
                                        enableBackground="new 0 0 123 122"
                                        xmlSpace="preserve"
                                    >
                                        <image
                                            id="image0"
                                            width={123}
                                            height={122}
                                            x={0}
                                            y={0}
                                            xlinkHref="data:image/png;base64,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 ZTwAAAAASUVORK5CYII="
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="contentRight">
                                <h4>THƯƠNG HIỆU UY TÍN</h4>
                                <p>LÂU ĐỜI 70 NĂM</p>
                            </div>
                        </div>

                    </div>
                    <div className="item col item3">
                        <div className="icon">
                            <div className="iconInner">
                                <span className="inner">
                                    <svg

                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        width="103px"
                                        height="103px"
                                        viewBox="0 0 103 103"
                                        enableBackground="new 0 0 103 103"
                                        xmlSpace="preserve"
                                    >
                                        {" "}
                                        <image
                                            id="image0"
                                            width={103}
                                            height={103}
                                            x={0}
                                            y={0}
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </svg>

                                </span>
                            </div>
                            <div className="contentRight">
                                <h4>ĐỀN 20 lẦN NẾU BÁN</h4>
                                <p>HÀNG FAKE</p>
                            </div>
                        </div>

                    </div>

                </Row>
            </div>
        </>
    )
}

export default TextAnimation;