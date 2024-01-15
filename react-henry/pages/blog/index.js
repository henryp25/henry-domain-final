import React from 'react'
import { getSortedPostsData } from '../../app/lib/posts'

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
    <div>
      <h2>
        Blog
      </h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            id:{title}
            <br />
            is:{id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  )
}


