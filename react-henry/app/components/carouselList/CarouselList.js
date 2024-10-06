import React from 'react'
import { useEffect,useRef, useState } from 'react';
import '../../../styles/carousel.css'
import { useWindowSize } from "@uidotdev/usehooks";

function CarouselList() {
  const size = useWindowSize();
  console.log(size.width);
  const carouselItems = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {
    carouselItems.current = document.getElementsByClassName("carouselSquare")

  },[])

  const nextSlide = function(){
    console.log(carouselItems.current.length);
    // Get the total number of items
    const totalItems = carouselItems.current.length;
    // Number of items to move per "slide"
    let itemsToShow = 3;
    if(size.width < 600){
      itemsToShow = 1;
    }
    // If the activeIndex is at the last set of tiles, loop back to the start
    if (activeIndex >= totalItems - itemsToShow) {
      // Hide the current tiles
      for (let i = 0; i < itemsToShow; i++) {
        if (carouselItems.current[activeIndex + i]) {
          carouselItems.current[activeIndex + i].classList.add("hidden");
        }
      }

      // Show the first set of tiles
      for (let i = 0; i < itemsToShow; i++) {
        carouselItems.current[i].classList.remove("hidden");
      }

      setActiveIndex(0);
      return;
    }

    // Hide the current set of tiles
    for (let i = 0; i < itemsToShow; i++) {
      if (carouselItems.current[activeIndex + i]) {
        carouselItems.current[activeIndex + i].classList.add("hidden");
      }
    }

    // Calculate the next index
    const nextIndex = activeIndex + itemsToShow;

    // Show the next set of tiles
    for (let i = 0; i < itemsToShow; i++) {
      if (carouselItems.current[nextIndex + i]) {
        carouselItems.current[nextIndex + i].classList.remove("hidden");
      }
    }

    setActiveIndex(nextIndex);
  }

  const prevSlide = function(){

      const totalItems = carouselItems.current.length;
      let itemsToShow = 3;
      if(size.width < 600){
        itemsToShow = 1;
      }

      // If the activeIndex is at the first set of tiles, loop back to the last set
      if (activeIndex === 0) {
        // Hide the current tiles
        for (let i = 0; i < itemsToShow; i++) {
          carouselItems.current[i].classList.add("hidden");
        }

        // Show the last set of tiles
        for (let i = 0; i < itemsToShow; i++) {
          carouselItems.current[totalItems - itemsToShow + i].classList.remove("hidden");
        }

        setActiveIndex(totalItems - itemsToShow); // Set activeIndex to the last set
        return;
      }

      // Hide the current set of tiles
      for (let i = 0; i < itemsToShow; i++) {
        carouselItems.current[activeIndex + i].classList.add("hidden");
      }

      // Calculate the previous index
      const prevIndex = activeIndex - itemsToShow;

      // Show the previous set of tiles
      for (let i = 0; i < itemsToShow; i++) {
        carouselItems.current[prevIndex + i].classList.remove("hidden");
      }

      setActiveIndex(prevIndex);
    }

  return (
    <div className='carousel'>
        <ul className='carouselList'>
            <li className='carouselSquare '>React</li>
            <li className='carouselSquare hidden '>Next JS</li>
            <li className='carouselSquare hidden'>SEO Best Practices</li>
            <li className='carouselSquare hidden'>Web Development</li>
            <li className='carouselSquare hidden'>Server Side Rendering</li>
            <li className='carouselSquare hidden'>Static Site Generation</li>
            <li className='carouselSquare hidden'>Web Performance</li>
            <li className='carouselSquare hidden'>Web Vitals</li>
            <li className='carouselSquare hidden'>Google Analytics</li>
        </ul>
        <div className='carouselButtonContainer'>
          <button onClick={prevSlide} className='carouselButton' type='button'>
              &lt;
          </button>
          <button onClick={nextSlide} className='carouselButton' type='button'>
            &gt;
          </button>
        </div>

  </div>
  )
}

export default CarouselList