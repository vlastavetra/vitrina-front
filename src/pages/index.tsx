import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TelegramLoginButton from "../components/TelegramLoginButton"

export default function Home() {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  return (
    <div className="main-wrapper">
      <Head>
        <title>Vitrina App Main</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TelegramLoginButton botName="vitrinail_bot" dataOnauth={handleTelegramResponse} />
      </main>
    </div>
  )
}
