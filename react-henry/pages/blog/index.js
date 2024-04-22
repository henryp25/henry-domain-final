import React from 'react'
import { getSortedPostsData } from '../../app/lib/posts'
import Meta from '@/app/components/metaData'
import Image from 'next/image'
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
      <Meta title='SEO Blog' description='Explore cutting-edge SEO strategies with Henry Price, a seasoned Tech SEO Specialist. Dive into insightful analyses, tips, and trends that drive visibility and traffic in the ever-evolving digital landscape. Perfect for marketers and businesses aiming for the top.' />
      <h2>
        Blog
      </h2>
      <Image src='/images/blog-header.jpg' alt='SEO' width={500} height={300} />
      <ul>
        {allPostsData.map(({ id, date, title, author }) => (
          <li key={id}>
            
            <br />
             <a href={`/blog/blog/${id}`}><b>{title}</b></a>
             <br />
             Written by: {author}
            <br />
            Date Published: {date}
          
          </li>
        ))}
      </ul>
    </div>
  )
}


