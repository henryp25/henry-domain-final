import React from 'react'
import { getSortedPostsData } from '../../app/lib/posts'
import Meta from '@/app/components/metaData'
import '../../styles/blog.css'
import '../../styles/globals.css'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Blog ({ allPostsData }) { 
  return (
    <div className='blog'>
      <h2>
        Blog
      </h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            Title: {title}
            <br />
             <a href={`/blog/blog/${id}`}><b>Click here for {id}</b></a>
            <br />
            {date}
          
          </li>
        ))}
      </ul>
    </div>
  )
}


