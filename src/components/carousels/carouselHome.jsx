import {useRef, useState, useEffect} from 'react';
import '../../styles/components/carousels/_carouselHome.scss';

import { useSelector } from 'react-redux';

//datos 



const CarouselHome = () => {

  const { carrouselHome } = useSelector((store) => store.carrouselHome);

  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

    if(imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);

  const scrollToImg = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0 ;
        return isFirstSlide ? 0 : curr - 1;
      })
    }else {
      const isLastSlide = currentIndex === carrouselHome.length - 1 ;
      if(!isLastSlide) {
        setCurrentIndex(curr => curr += 1)
      } 
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return(
    <>
    <section className="carouselHomeContainer">
    <div className='carouselHomeContainer__slider-container '>

     <span className="carouselHomeContainer__leftArrow" onClick={() => scrollToImg('prev')} >&#10092;</span>
      <span className="carouselHomeContainer__rightArrow" onClick={() => scrollToImg('next')}>&#10093;</span> 

    <div className=" carouselHomeContainer__container-img">
    <ul ref={listRef} >
      <span className="carouselHomeContainer__gradient"></span>
    {
      carrouselHome.map((imgCar) => {
        return <li key={imgCar.id}>
                  <img src={imgCar.imgURL} alt=""/>
               </li>
      })
    }
    </ul> 
    </div>
    </ div>

    <section className="container"> 
    <div className="container carouselHomeContainer__dots-container">
    {
      carrouselHome.map((img) => (
        <div 
        key={img.id}
        className={`carouselHomeContainer__dots-item ${img.id === currentIndex ? "active" : "0"}`}
        onClick= {() => goToSlide(img.id)}
        >


        <section className="img-docts">  
              <img src={img.imgURL}></img>
        </section>
        <section className='docts-descriptions'>
            <h2>{img.homeTitle}</h2>
        </section>

        </div>
      ))
    }
    </div>
    </section>
    </section>
    </>
  )
}

export default CarouselHome
