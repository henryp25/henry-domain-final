import React from 'react'
import '../../../styles/carousel.css'

function CarouselList() {
  return (
    <div className='carousel'>
        <ul className='carouselList'>
            <li className='carouselSquare'>React</li>
            <li className='carouselSquare' >Next JS</li>
            <li className='carouselSquare'>SEO Best Practices</li>
            <li className='carouselSquare'>Web Development</li>
            <li className='carouselSquare hidden'>Server Side Rendering</li>
            <li className='carouselSquare hidden'>Static Site Generation</li>
            <li className='carouselSquare hidden'>Web Performance</li>
            <li className='carouselSquare hidden'>Web Vitals</li>
            <li className='carouselSquare hidden'>Google Analytics</li>
        </ul>
        <button className='carouselButton' type='button'>Next</button>
  </div>
  )
}

export default CarouselList