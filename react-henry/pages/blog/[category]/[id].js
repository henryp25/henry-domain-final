import Meta from "@/app/components/metaData";
import { getAllPostIds, getPostData } from "@/app/lib/posts";
import Date from '../../../app/components/date'
import '../../../styles/blog.css'
import React from "react";
import Markdown from 'react-markdown'

export async function getStaticProps ({params}){
  console.log(params)
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    }

  }

}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false,
  }

}

export default function blogDetail({postData}) {
    return (
      <>
      <Meta title={postData.title} description={postData.description} />
      <div className="blog">
        <div className="blog-content">
          <div className="blogDetails">
              <p>{postData.category}</p>
              {<Date dateString={postData.date} />}
            </div>
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
            
        </div>
      </div>
      </>

    )
  }



