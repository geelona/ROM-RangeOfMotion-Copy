import "./Different.scss";
import image from "../../assets/images/different-section/image.png";
import point1 from "../../assets/images/different-section/point1.png";
import point2 from "../../assets/images/different-section/point2.png";
import point3 from "../../assets/images/different-section/point3.png";
import point4 from "../../assets/images/different-section/point4.png";
import point5 from "../../assets/images/different-section/point5.png";
import point6 from "../../assets/images/different-section/point6.png";
import point7 from "../../assets/images/different-section/point7.png";
import point8 from "../../assets/images/different-section/point8.png";
import point9 from "../../assets/images/different-section/point9.png";

function Different() {
    return (
        <>
            <div className="different-wrapper">
                <img src={image} alt="image" />
                <div className="different-wrapper__content">
                    <h1>What makes this gun different from the rest</h1>
                    <div className="content__points">
                        <div className="points__point">
                            <img src={point1} alt="point 1 image" />
                            <p>
                                Integrated with Artificial Intelligence | Smart
                                Hit Control
                            </p>
                        </div>

                        <div className="points__point">
                            <img src={point6} alt="point 6 image" />
                            <p>
                                6 different head attachments to suit all muscle
                                groups
                            </p>
                        </div>

                        <div className="points__point">
                            <img src={point2} alt="point 2 image" />
                            <p>Triple Noise Reduction Technology</p>
                        </div>

                        <div className="points__point">
                            <img src={point7} alt="point 7 image" />
                            <p>Remaining Power Display</p>
                        </div>

                        <div className="points__point">
                            <img src={point3} alt="point 3 image" />
                            <p>Vibration filtering for smoother operating</p>
                        </div>

                        <div className="points__point">
                            <img src={point8} alt="point 8 image" />
                            <p>5 Year Motor Warranty</p>
                        </div>

                        <div className="points__point">
                            <img src={point4} alt="point 4 image" />
                            <p>12V Lithium battery with 2 hour fast charging</p>
                        </div>

                        <div className="points__point">
                            <img src={point9} alt="point 9 image" />
                            <p>
                                12 KG pressure bearing with brushless
                                motor&nbsp;
                                <span>
                                    (Which means it's intensely powerful, while
                                    also having an extremely quiet &
                                    frictionless operating system)
                                </span>
                            </p>
                        </div>

                        <div className="points__point">
                            <img src={point5} alt="point 5 image" />
                            <p>30 Day Money Back Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Different;
