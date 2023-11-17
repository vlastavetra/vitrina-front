import Head from "next/head"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false)

  const handleChangePhoneNumber = (e) => {
    const inputPhoneNumber = e.target.value
    setPhoneNumber(inputPhoneNumber)

    const isPhoneNumberValid = /^05\d{8}$/.test(inputPhoneNumber)

    setIsValidPhoneNumber(isPhoneNumberValid)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isValidPhoneNumber) {
      console.log('Phone number is valid:', phoneNumber);
    } else {
      console.log('Invalid phone number:', phoneNumber)
    }
  }
  return (
    <div className="main-wrapper">
      <Head>
        <title>Vitrina App Login</title>
      </Head>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phoneNumber">Israeli Telephone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              placeholder="Enter your phone number"
            />
          </div>
          {!isValidPhoneNumber && (
            <p className="error-message">Please enter a valid Israeli phone number (starting with 05).</p>
          )}
          <button type="submit" disabled={!isValidPhoneNumber}>Login</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}