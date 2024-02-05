import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const blogDirectory = path.join(process.cwd(), '/app/posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(blogDirectory)
    return fileNames.map(fileName => {
      console.log(fileName)
        return {
            params: {
            id: fileName.replace(/\.md$/, ''),
            category: 'blog'
            }
        }
        }
    )
}

export async function getPostData(id) {
    const fullPath = path.join(blogDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(fileContents)
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    //Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

export function getSortedPostsData() {
    // Get file names under /posts
    console.log(blogDirectory)
    const fileNames = fs.readdirSync(blogDirectory)
    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)
  
      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
}