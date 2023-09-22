import { useEffect, useRef, useState } from "react";
import { data } from "../js/dataCarousel";
import "../css/Carousel.css";

export default function Carousel() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="main-container">
        <div className="slider-container">
          <div className="container-images">
            <ul ref={listRef}>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.imgUrl} width={650} height={320} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`dot-container-item ${
                  idx === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(idx)}
              >
                ◽
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
