import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CatalogMain from "../components/CatalogMain"

const cards = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "/images/1.jpg",
    shop: {
      id: 1,
      name: "Shop 1",
      slug: "shop-1",
    },
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "/images/2.jpg",
    shop: {
      id: 1,
      name: "Shop 1",
      slug: "shop-1",
    },
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "/images/3.jpg",
    shop: {
      id: 2,
      name: "Shop 2",
      slug: "shop-2",
    },
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "/images/4.jpg",
    shop: {
      id: 2,
      name: "Shop 2",
      slug: "shop-2",
    },
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "/images/5.jpg",
    shop: {
      id: 3,
      name: "Shop 3",
      slug: "shop-3",
    },
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    image: "/images/6.jpg",
    shop: {
      id: 3,
      name: "Shop 3",
      slug: "shop-3",
    },
  },
]

export default function Catalog() {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Vitrina App Main</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CatalogMain cards={cards} />
      <Footer />
    </div>
  )
}
