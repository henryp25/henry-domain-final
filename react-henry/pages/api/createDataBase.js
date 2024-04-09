import pg from 'pg';
import { sql } from '@vercel/postgres';
import routeURL from 'app/backendData/urlList'
// require('dotenv').config({ path: '.env.local' });
const currentDate = new Date().toDateString();

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
});


const listofPosts = JSON.parse(JSON.stringify(routeURL.pages))

export default async function handler(req,res) {
    try{
        for (const post of listofPosts) {
            console.log(post)
            const insertQuery = `
                INSERT INTO posts (url, title, categories)
                VALUES ($1, $2, $3)
                ON CONFLICT (url) DO NOTHING
                RETURNING *;`;
            try {
                const res = await pool.query(insertQuery, [post.url, post.title, post.categories]);
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
