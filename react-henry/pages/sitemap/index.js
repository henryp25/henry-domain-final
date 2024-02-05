import React from 'react'
import { sql } from '@vercel/postgres'
import pg from 'pg';

// require('dotenv').config({ path: '.env.local' });
const currentDate = new Date().toDateString();


export async function getServerSideProps() {
    const gatherURLs = await fetch('/api/createDataBase')
    const pool = new pg.Pool({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });
    const query = `SELECT * FROM posts`;
    const res = await pool.query(query)
    const posts = res.rows
    posts.forEach(post => {
        post.date = post.date.toISOString();
      });
    console.log(posts[0].title)
    return { props: { posts } };
}


export default function htmlSitemap({posts}) {
    return (
        <>
            <h1>HTML Sitemap</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                </div>
            ))}
            <h2>Testing URLs</h2>
        </>
    )
}