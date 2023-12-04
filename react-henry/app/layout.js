import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from './components/Navigation'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Homepage | Henry Price',
    template: '%s | Henry Price',
  },
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script>
        dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-K6BFSLDH');`,
                }}
      </Script>
      <body>

          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6BFSLDH"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>


      <Navigation />
      {children}
      </body>
    </html>
  )
}
