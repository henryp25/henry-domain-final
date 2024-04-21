import React from 'react'
import { sql } from '@vercel/postgres'
import pg from 'pg';
import '../../styles/sitemap.css'
import '../../styles/globals.css'

// require('dotenv').config({ path: '.env.local' });
const currentDate = new Date().toDateString();


export async function getServerSideProps() {
    const gatherURLs = await fetch(`${process.env.SITE_URL}/api/createDataBase`)
    const pool = new pg.Pool({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });
    const query = `SELECT * FROM posts`;
    const res = await pool.query(query)
    const posts = res.rows

    return { props: { posts } };
}


export default function htmlSitemap({posts}) {
    return (
        <>
            <div>
                <div>
                    <h1>HTML Sitemap</h1>
                </div>

                <div>
                    <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a href={post.url}>{post.title}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    )
}