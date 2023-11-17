import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Vitrina App Main</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
      <Footer />
    </div>
  )
}
