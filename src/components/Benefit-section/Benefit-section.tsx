import "./Benefit-section.scss";

import point1 from "../../assets/images/benefit-section/point1.png";
import point2 from "../../assets/images/benefit-section/point2.png";
import point3 from "../../assets/images/benefit-section/point3.png";
import point4 from "../../assets/images/benefit-section/point4.png";
import point5 from "../../assets/images/benefit-section/point5.png";
import point6 from "../../assets/images/benefit-section/point6.png";
import point7 from "../../assets/images/benefit-section/point7.png";
import image from "../../assets/images/benefit-section/image.png";

function Benefit() {
    return (
        <>
            <div className="benefit-wrapper flex justify-between items-center">
                <div className="wrapper__info flex flex-col">
                    <h1>The Benefits</h1>
                    <div className="info__points flex flex-wrap">
                        <div className="points__point">
                            <img src={point1} alt="point 1 image" />
                            <p>Prevents delayed onset muscle soreness</p>
                        </div>
                        <div className="points__point">
                            <img src={point5} alt="point 5 image" />
                            <p>Release tension in tight muscles</p>
                        </div>
                        <div className="points__point">
                            <img src={point2} alt="point 2 image" />
                            <p>
                                Ideal for warm-up, injury prevention, and
                                recovery
                            </p>
                        </div>
                        <div className="points__point">
                            <img src={point6} alt="point 6 image" />
                            <p>
                                Increases blood flow and activates both muscular
                                and nervous system
                            </p>
                        </div>
                        <div className="points__point">
                            <img src={point3} alt="point 3 image" />
                            <p>Removes toxic bi-products post training</p>
                        </div>
                        <div className="points__point">
                            <img src={point7} alt="point 7 image" />
                            <p>
                                Removes scar tissue and encourages natural
                                muscle repair
                            </p>
                        </div>
                        <div className="points__point">
                            <img src={point4} alt="point 4 image" />
                            <p>Perfect for relaxation</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="product image" />
            </div>
        </>
    );
}

export default Benefit;
