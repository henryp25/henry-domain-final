import React from 'react'
import RootLayout from '../../app/layout'
import Meta from '@/app/components/metaData'
import '../../styles/globals.css'


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
        <div>page</div>
    </>

  )
}
