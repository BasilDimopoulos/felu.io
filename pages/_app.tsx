import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>felu.io</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}                                                                                                           
