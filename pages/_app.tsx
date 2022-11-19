import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Head from 'next/head'
import localFont from '@next/font/local'

const monaSans = localFont({
  src:[
    {
      path: '../assets/fonts/Mona-Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mona-Sans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mona-Sans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mona-Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mona-Sans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mona-Sans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ]
})

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
      </Head>
      <div>
        <NavBar />
        <main className='monaSans.className'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}                                                                                                           
