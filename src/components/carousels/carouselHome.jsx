import { useState, useEffect } from "react";
import "../../styles/components/carousels/_carouselHome.scss";
import { useSelector } from "react-redux";

const CarouselHome = () => {
  const { carrouselHome } = useSelector((store) => store.carrouselHome);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 100000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carrouselHome.length);
    }, intervalTime);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [carrouselHome.length]);

  const scrollToImg = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? carrouselHome.length - 1 : curr - 1;
      } else {
        return curr === carrouselHome.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="carouselHomeContainer">
      <div className="carouselHomeContainer__slider-container">
        <span
          className="carouselHomeContainer__leftArrow"
          role="button"
          aria-label="Previous slide"
          onClick={() => scrollToImg("prev")}
        >
          &#10092;
        </span>
        <span
          className="carouselHomeContainer__rightArrow"
          role="button"
          aria-label="Next slide"
          onClick={() => scrollToImg("next")}
        >
          &#10093;
        </span>

        <div className="carouselHomeContainer__container-img">
          <ul>
            <span className="carouselHomeContainer__gradient"></span>
            {carrouselHome.map((imgCar, index) => (
              <li
                key={imgCar.id}
                className={index === currentIndex ? "active" : ""}
              >
                <img src={imgCar.imgURL} alt={imgCar.homeTitle} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="carouselHomeContainer__dots-container">
        {carrouselHome.map((img, index) => (
          <div
            key={img.id}
            className={`carouselHomeContainer__dots-item ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          >
            <section className="img-docts">
              <img src={img.imgURL} alt={img.homeTitle} />
            </section>
            {/*
            <section className="docts-descriptions">
              <h2>{img.homeTitle}</h2>
            </section>
            */}
          </div>
        ))}
      </section>
    </section>
  );
};

export default CarouselHome;
