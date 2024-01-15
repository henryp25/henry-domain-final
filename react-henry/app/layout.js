import '../styles/globals.css'
import Navigation from './components/Navigation'
import Script from 'next/script'
import Head from 'next/head'



export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
