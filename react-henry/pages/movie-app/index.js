import React from 'react'

import ProfileCard from '../../app/components/movie-app/searchBar'
import PageHeader from '../../app/components/movie-app/PageHeader'


function Index() {

  return (
    <div className='page-container'>
      <div className='searchArea'>
        <PageHeader />
        <ProfileCard />
      </div>
    </div>

  )
}

export default Index