import "./Footer.scss";

import videoFrame from "../../assets/images/footer-section/video-frame.png";
import playBtn from "../../assets/images/footer-section/play-btn.png";
import ButtonPrimary from "../Button-primary/Button-primary";

function Footer() {
    function onPlay() {
        alert("video play button pressed");
    }
    function onBuy() {
        alert("buy product button pressed");
    }

    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-wrapper__video-frame">
                    <img src={videoFrame} alt="" />
                    <button onClick={onPlay}>
                        <img src={playBtn} alt="" />
                    </button>
                    <ButtonPrimary title="BUY NOW" func={onBuy} />
                </div>
                <p>©2021 - Range of motion</p>
            </div>
        </>
    );
}

export default Footer;
