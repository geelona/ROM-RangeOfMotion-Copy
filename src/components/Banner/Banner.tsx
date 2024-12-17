import "./Banner.scss";

import star from "../../assets/images/star.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

function Banner() {
    return (
        <>
            <div className="banner-wrapper">
                <div className="banner-wrapper__info flex">
                    <div className="info__text flex flex-col flex-1">
                        <h1>Trusted by Athletes</h1>
                        <p>
                            Integrated with A.I to ensure your massage pressure
                            is never compromised
                        </p>
                        <div className="text__details flex">
                            <div className="details__warranty details__detail">
                                <div className="waranty__amount amount">
                                    <div className="amount__group">
                                        <div className="group__1-number">
                                            <ul>
                                                <li>0</li>
                                                <li>1</li>
                                            </ul>
                                        </div>
                                        <div className="group__2-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>8</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>Months</p>
                                </div>
                                <p>Included Warranty</p>
                            </div>
                            <div className="details__customers details__detail">
                                <div className="customers__amount amount">
                                    <div className="amount__group">
                                        <div className="group__1-number">
                                            <ul>
                                                <li>0</li>
                                                <li>1</li>
                                            </ul>
                                        </div>
                                        <div className="group__2-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>0</li>
                                            </ul>
                                        </div>
                                        <div className="group__3-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>0</li>
                                            </ul>
                                        </div>
                                        <div className="group__4-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>0</li>
                                            </ul>
                                        </div>
                                        <div className="group__5-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>0</li>
                                            </ul>
                                        </div>
                                        <div className="group__6-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li className="placeholder"></li>
                                                <li>+</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Loyal customers</p>
                            </div>
                            <div className="details__stars details__detail">
                                <div className="stars__amount amount">
                                    <div className="amount__group">
                                        <div className="amount__group-1-number">
                                            <ul>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="amount__group-2-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="amount__group-3-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="amount__group-4-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="amount__group-5-number">
                                            <ul>
                                                <li className="placeholder"></li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={star}
                                                        alt="star"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Stars</p>
                            </div>
                        </div>
                        <button></button>
                        <p>Buy now, pay later option available</p>
                        <p>Free Worldwide Express Delivery</p>
                        <div className="text__partners">
                            <img src={partner1} alt="partners" />
                            <img src={partner2} alt="partners" />
                        </div>
                    </div>
                    <div className="info__product flex-1">
                        <img src={banner1} alt="banner" />
                        <img src={banner2} alt="banner" />
                    </div>
                </div>
                <div className="banner-wrapper__extras"></div>
            </div>
        </>
    );
}

export default Banner;
