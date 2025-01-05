import "./recovery.scss";
import background from "../../assets/images/recovery-section/background.png";
import background2 from "../../assets/images/recovery-section/background2.png";
import image from "../../assets/images/recovery-section/image.png";

function Recovery() {
    return (
        <>
            <div className="recovery-wrapper">
                <div className="recovery-wrapper__background">
                    <img src={background} alt="" />
                    <img src={background2} alt="" />
                    <img src={image} alt="" />
                </div>
                <div className="recovery-wrapper__conent">
                    <p>Recovery</p>
                    <p>Recovery</p>
                    <p>Recovery</p>
                </div>
            </div>
        </>
    );
}

export default Recovery;
