

export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}



export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}