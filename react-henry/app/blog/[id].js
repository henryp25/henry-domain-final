'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
const Post = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  useEffect(() => {
    if (router) {
      const { id } = router.query;
      setId(id);
    }
  }, [router.query]);

return (
    <div>
      <h1>Post {id}</h1>
      {/* Fetch and display content for post with id */}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch data based on params.id
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const postData = await res.json();
 return {
    props: {
      postData,
    },
  };
}
export default Post;