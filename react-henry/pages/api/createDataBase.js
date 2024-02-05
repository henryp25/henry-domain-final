import pg from 'pg';
import { sql } from '@vercel/postgres';
// require('dotenv').config({ path: '.env.local' });
const currentDate = new Date().toDateString();

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
});


const listofPosts = [
    {
        url: '/blog/blog/ssg-ssr',
        title: 'Server Side Rendering',
        date: currentDate,
        categories: 'blog'
    },
    {
        url: '/blog',
        title: 'Blog Listing',
        date: currentDate,
        categories: 'blog'
    },
    {
        url: '/about/page',
        title: 'About Listing Page',
        date: currentDate,
        categories: 'about'
    },
    {
        url: '/about/test',
        title: 'Henry Testing',
        date: currentDate,
        categories: 'about'
    },
]

export default async function handler(req,res) {
    console.log(pool)
    try{
        for (const post of listofPosts) {
            const insertQuery = `
                INSERT INTO posts (url, title, date, categories)
                VALUES ($1, $2, $3, $4)
                RETURNING *;`;
            try {
                const res = await pool.query(insertQuery, [post.url, post.title, post.date, post.categories]);
                console.log('Inserted data:', res.rows[0]);
            } catch (err) {
                console.error('Error inserting data:', err);
            }
        }
        res.status(200).json({ message: 'Data saved successfully!' });
    } catch(err) {
        console.log(pool)
        console.log(err);
    }
}
