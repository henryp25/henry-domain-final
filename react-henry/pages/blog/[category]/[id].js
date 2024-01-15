import { getAllPostIds, getPostData } from "@/app/lib/posts";

export async function getStaticProps ({params}){
  console.log(params)
  const postData = getPostData(params.id);
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
      <div>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        
      </div>
    )
  }



