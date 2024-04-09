import Meta from "@/app/components/metaData";
import { getAllPostIds, getPostData } from "@/app/lib/posts";
import Date from '../../../app/components/date'
import '../../../styles/blog.css'

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
          {postData.title}
          <br />
          {postData.id}
          <br />
          <Date dateString={postData.date} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          
        </div>
      </>

    )
  }



