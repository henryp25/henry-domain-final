import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function ProfileCard() {
    const router = useRouter()
    
    function onClick() {
      const userInput = document.getElementById('userInput')
      if(userInput.value){
        router.push(`/movie-app/movieSearch/${encodeURIComponent(userInput.value.trim())}`)
      } else {
        console.log('No search term entered')
        router.push(`/`)
      }  

    }
  
  return (
    <div className='container'>
        <div className='searchBox'>
            <div>
                <div className='searchInput'>
                    <input id='userInput' type="text" placeholder="Search for a movie" />
                </div>
                <div className='searchButton'>
                    <button type='button' onClick={onClick} >Search</button>
                </div>
            </div>
        
        </div>
        
    </div>
  )
}

export default ProfileCard