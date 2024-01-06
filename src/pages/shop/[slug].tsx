import { useRouter } from "next/router"
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ShopPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="main-wrapper">
      <Head>
        <title>Vitrina App Shop Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Shop Page</h1>
        <p>Shop Slug: {slug}</p>
      </main>
      <Footer />
    </div>
  )
}

export default ShopPage
