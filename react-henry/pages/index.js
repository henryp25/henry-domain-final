import Image from 'next/image'
import Navigation from '../app/components/Navigation'
import HeaderBanner from '../app/components/HeaderBanner'
import Meta from '../app/components/metaData'
import RootLayout from '../app/layout'
import {sql} from '@vercel/postgres'




export default function Home() {
  return (
    <>
      <Meta title="Home" description="Home page" />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <HeaderBanner />
        </div>
      
        <div>
          <div className=''>
            <h2 className="text-4xl font-bold text-center">This is a site about Henry</h2>
          </div>
          <div className="flex justify-center">
            <Image src="/images/Henry-Arsenal.webp" width={400} height={400} alt='test'/>

          </div>
        </div>
    
      </main>
    </>
    

  )
}
