import "./Include.scss";
import image from "../../assets/images/include-section/image.png";

function Include() {
    return (
        <>
            <div className="include-wrapper flex items-center justify-between">
                <div className="include-wrapper__image">
                    <img src={image} alt="image" />
                </div>
                <div className="include-wrapper__content flex flex-col">
                    <h1>What's included in your order</h1>
                    <ul>
                        <li>Booster Professional Series Massager</li>
                        <li>
                            6 different massage heads (to suit all muscle groups
                            and intensity preference)
                        </li>
                        <li>
                            Portable carry case with internal foam mould for
                            safe and convenient storage
                        </li>
                        <li>How-to-use instruction manual</li>
                        <li>USB-C charger cord</li>
                        <li>18 Months Inclued Warranty</li>
                        <li>Free Express Delivery</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Include;
