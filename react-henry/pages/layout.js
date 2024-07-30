import '../styles/globals.css'
import Navigation from '../app/components/Navigation'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '../app/components/footer/Footer'



export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
