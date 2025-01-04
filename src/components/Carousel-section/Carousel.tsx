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

    // Для хранения состояния перетаскивания
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);

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

        const handleDragStart = (event: MouseEvent | TouchEvent) => {
            setIsDragging(true);
            setStartX(getPositionX(event));
            setPrevTranslate(-currentIndex * carousel.offsetWidth);
        };

        const handleDragMove = (event: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const currentPosition = getPositionX(event);
            const movement = currentPosition - startX;
            setCurrentTranslate(prevTranslate + movement);
            track.style.transform = `translateX(${currentTranslate}px)`;
        };

        const handleDragEnd = () => {
            if (!isDragging) return;
            setIsDragging(false);

            const moveBy = currentTranslate - prevTranslate;
            const direction = moveBy > 100 ? -1 : moveBy < -100 ? 1 : 0;

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
            setCurrentTranslate(-newIndex * carousel.offsetWidth);
            setPrevTranslate(-newIndex * carousel.offsetWidth);
            track.style.transform = `translateX(${-newIndex * 100}%)`;
        };

        const getPositionX = (event: MouseEvent | TouchEvent): number => {
            return event instanceof MouseEvent
                ? event.clientX
                : event.touches[0].clientX;
        };

        // События тачскрина
        track.addEventListener("touchstart", handleDragStart);
        track.addEventListener("touchmove", handleDragMove);
        track.addEventListener("touchend", handleDragEnd);

        carousel.addEventListener("wheel", handleWheel);

        return () => {
            track.removeEventListener("touchstart", handleDragStart);
            track.removeEventListener("touchmove", handleDragMove);
            track.removeEventListener("touchend", handleDragEnd);

            carousel.removeEventListener("wheel", handleWheel);
        };
    }, [
        canScroll,
        currentIndex,
        isDragging,
        startX,
        currentTranslate,
        prevTranslate,
    ]);

    return (
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
    );
}

export default Carousel;
