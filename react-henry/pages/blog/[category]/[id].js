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
        <div className="blog-content">
          <Meta title={postData.title} description={postData.description} />
            <div>
              <h1>{postData.title}</h1>
            </div>
              
            <div>
              <p>{postData.category}</p>
            </div>

            <div>
              {<Date dateString={postData.date} />}
            </div>
            <br />
            
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
      </>

    )
  }



