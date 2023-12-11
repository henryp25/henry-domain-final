import Image from 'next/image'
import Navigation from './components/Navigation'
import HeaderBanner from './components/HeaderBanner'

export default function Home() {
  return (
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
  )
}
