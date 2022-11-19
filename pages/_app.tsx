import Nav from '../components/Nav'
import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}                                                                                                           
