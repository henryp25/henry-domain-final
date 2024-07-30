import React from 'react'
import '../../../styles/movie.css'


function PageHeader() {


  return (
    <div className='headerComponent'>
      <a href='/movie-app' style={{ textDecoration: 'none' }}>
        <h1>Movie Search App</h1>
      </a>
    </div>
  )

  
}

export default PageHeader