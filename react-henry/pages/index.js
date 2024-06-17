import HeaderBanner from '../app/components/Onpage/HeaderBanner'
import Meta from '../app/components/metaData'
import '../styles/homepage.css'
import '../styles/globals.css'
import Image from 'next/image'

     

export default function Home() {
  return (
    <>
      <Meta title="Home" description="Home page" />
      <main className="container">
        <div h>
          <HeaderBanner />
        </div>
        <div>
          <div className="flex justify-center">
          

          </div>
        </div>
        <div className='mainContent'>
            <div>
              <h2>Wondering what you've landed on?</h2>
              <Image src="/images/Henry-Arsenal.webp" width={400} height={400} alt='test'/>
            </div>
            <div className='bodyDescription'> 
              <article>
                  <p>Welcome to the digital playground of a tech tinkerer extraordinaire! 🎩✨ Here, amidst the pixel dust and the 'design in progress' signs, you'll find an eclectic collection of tools crafted by yours truly - a connoisseur of code and a seeker of SEO secrets. From whimsical widgets to serious stuff, each creation is a testament to my love for testing and tweaking the unseen.</p>

                  <p>This site is stitched together with the magic of Next.js and React, sprinkled with the analytics wizardry of GA4 and GSC. It's not just a website; it's a wonderland where pixels meet performance, and the real enchantment is hidden from the usual user, waiting to be discovered by the worthy.</p>

                  <p>And hey, if you're reading this, give yourself a pat on the back! 👏 You've just stumbled upon my secret lab. 'Well done for finding my test site' - you're officially cooler than a polar bear's toenails. 😎🐻❄️ While you're here, don't mind the construction tape; it's all part of the charm. The design may be 'getting there', but the true magic? It's already here, in every line of code. 😉🚀</p>


                  <p> Have you seen yet? Ive intentially lazy loaded the LCP. Why you might ask? because i can.</p>
              </article>
              <div className='resources'>
                <ul>
                  <li>React</li>
                  <li>Next JS</li>
                  <li>SEO Best Practices</li>
                  <li>Web Development</li>
                  <li>Server Side Rendering</li>
                  <li>Static Site Generation</li>
                  <li>Web Performance</li>
                  <li>Web Vitals</li>
                  <li>Google Analytics</li>
                </ul>
            </div>
         </div>   
        </div>
      </main>
    </>
    

  )
}
