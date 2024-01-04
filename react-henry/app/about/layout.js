import { Inter } from 'next/font/google'
import Navigation from 'app/components/Navigation'
import Script from 'next/script'
import Head from 'next/head'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'About Page ',
    description: 'Learn about how i have developed my skills within development with links to each process or function created',
    alternates: {
        canonical: '/about',
        languages: {
            'en-US': '/en-US',
            'de-DE': '/de-DE',
        },
    }
}


export default function RootLayout({ children }) {
    return (
        children
    )
}
