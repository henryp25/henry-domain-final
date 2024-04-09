const pg = require('pg');
require('dotenv').config({ path: '.env.local' });

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
]

async function createTable() {
    const createTableText = `
      CREATE TABLE IF NOT EXISTS
      posts(
        id  PRIMARY KEY,
        url VARCHAR(255),
        title VARCHAR(255),
        date TIMESTAMP,
        categories VARCHAR(255)
      )`;
      try{
            const res = await pool.query(createTableText);
            console.log(res);
      } catch(err) {
            console.log(err);
      }
}

async function insertData(postsData) {
      for (const post of postsData) {
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
  }

createTable();
insertData(listofPosts);
