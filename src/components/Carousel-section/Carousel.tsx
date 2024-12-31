import "./Carousel.scss";

import image1 from "../../assets/images/carousel-section/image1.png";
import image2 from "../../assets/images/carousel-section/image2.png";
import image3 from "../../assets/images/carousel-section/image3.png";
import image4 from "../../assets/images/carousel-section/image4.png";
import image5 from "../../assets/images/carousel-section/image5.png";
import image6 from "../../assets/images/carousel-section/image6.png";

import { useState, useRef, useEffect } from "react";

function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        const track = trackRef.current;

        if (!track || !carousel) return;

        const items = track.querySelectorAll(".track__el");
        if (dotsRef.current?.children.length === 0) {
            for (let i = 0; i < items.length; i++) {
                const newDot = document.createElement("div");
                newDot.classList.add("dots__dot");
                i === 0 && newDot.classList.add("dots__dot--active");
                newDot.id = `dot${i}`;
                dotsRef.current?.appendChild(newDot);
            }
        }

        const maxIndex = items.length - 1;

        const handleWheel = (event: WheelEvent) => {
            if (!canScroll) return;

            const direction = event.deltaY > 0 ? 1 : -1;

            if (
                (currentIndex === 0 && direction === -1) ||
                (currentIndex === maxIndex && direction === 1)
            ) {
                return;
            }

            event.preventDefault();

            const newIndex = Math.max(
                0,
                Math.min(currentIndex + direction, maxIndex)
            );

            const previousActiveDot =
                dotsRef.current?.getElementsByClassName("dots__dot--active")[0];
            const currentActiveDot = dotsRef.current?.querySelector(
                `#dot${newIndex}`
            );
            previousActiveDot?.classList.remove("dots__dot--active");
            currentActiveDot?.classList.add("dots__dot--active");

            setCurrentIndex(newIndex);
            setCanScroll(false);

            track.style.transform = `translateX(${-newIndex * 100}%)`;

            setTimeout(() => {
                setCanScroll(true);
            }, 1200);
        };

        carousel.addEventListener("wheel", handleWheel);

        return () => {
            carousel.removeEventListener("wheel", handleWheel);
        };
    }, [canScroll, currentIndex]);

    return (
        <>
            <div className="carousel-wrapper">
                <div ref={dotsRef} className="carousel-wrapper__dots"></div>
                <div ref={carouselRef} className="carousel-wrapper__carousel">
                    <div ref={trackRef} className="carousel__track flex">
                        <div className="track__el">
                            <img src={image1} alt="image" />
                        </div>
                        <div className="track__el">
                            <img src={image2} alt="image" />
                        </div>
                        <div className="track__el">
                            <img src={image3} alt="image" />
                        </div>
                        <div className="track__el">
                            <img src={image4} alt="image" />
                        </div>
                        <div className="track__el">
                            <img src={image5} alt="image" />
                        </div>
                        <div className="track__el">
                            <img src={image6} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
