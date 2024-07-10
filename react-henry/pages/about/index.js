import React from 'react'
import RootLayout from '../../app/layout'
import Meta from '@/app/components/metaData'
import '../../styles/about.css'


async function getServerSideProps() {
  
}

// export const metadata = {
//     title: 'About Page ',
//     description: 'Learn about how i have developed my skills within development with links to each process or function created',
//     alternates: {
//         canonical: '/about',
//         languages: {
//             'en-US': '/en-US',
//             'de-DE': '/de-DE',
//         },
//     }
// }

export default function About() {
  return (
    <>
      <Meta title="About" description="About page" />
      <div>
          <div class="about-Container">
            <header>
                <img src="profile.jpg" alt="Profile Picture" class="profile-pic"/>
                <h1>Henry Price</h1>
                <p>Web Developer | SEO Specialist | Content Creator</p>
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/henry-price-9ab362b4/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/henryp25" target="_blank">GitHub</a>
                </div>
            </header>

          <section class="about">
              <h2>About Me</h2>
              <p>
                  Hello! Henry, a passionate web developer with a love for creating beautiful and functional websites. 
                  With a background in SEO, I have a unique perspective on how to create user-friendly and aesthetically 
                  pleasing digital experiences. When I'm not coding, you can find me exploring new technologies, creating 
                  content, or enjoying the great outdoors.
              </p>
          </section>

          <section class="skills">
              <h2>Skills</h2>
              <ul>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>UI/UX Design</li>
                  <li>Content Creation</li>
              </ul>
          </section>

          <section class="hobbies">
              <h2>Hobbies</h2>
              <ul>
                  <li>Football</li>
                  <li>Traveling</li>
                  <li>Gaming</li>
                  <li>Reading</li>
                  <li>Cooking</li>
              </ul>
          </section>

          <footer>
              <p>&copy; 2024 Henry Price. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>

  )
}
