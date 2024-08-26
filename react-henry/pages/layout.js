import '../styles/globals.css'
import Navigation from '../app/components/NavBar/Navigation'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '../app/components/footer/Footer'
import NavBar from '../app/components/NavBar/NavBar'



export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
}
