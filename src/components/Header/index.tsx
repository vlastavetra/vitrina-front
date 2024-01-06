import Link from "next/link"
import { useRouter } from "next/router"
import s from "./styles.module.scss"

const categories = [
  "Clothes and shoes",
  "Accessories",
  "Decorations",
  "Entertainment",
  "Home and life",
  "Children",
  "Food",
  "Vintage",
]

export default function Header() {
  const router = useRouter()
  const page = router.pathname.substring(1)
  const { slug } = router.query
  return (
    <header className={s["main-header"]}>
      <div className={s["main-header-row-first"]}>
        <Link href="/" className={s["main-header-logo"]}>VITRINA</Link>
        <form action="" className={s["main-header-form"]}>
          <input type="text" placeholder="Search shops or goods" className={s["main-header-form-input"]} />
          <button type="submit" className={s["main-header-form-button"]}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.32 11.4559C9.03418 12.4548 7.41598 12.926 5.79491 12.7736C4.17384 12.6213 2.67179 11.8568 1.5946 10.6358C0.517411 9.41486 -0.0539238 7.82924 -0.0030697 6.20182C0.0477844 4.5744 0.717004 3.02755 1.86832 1.87623C3.01965 0.724908 4.5665 0.0556884 6.19392 0.00483435C7.82134 -0.0460197 9.40695 0.525315 10.6279 1.60251C11.8489 2.6797 12.6134 4.18175 12.7657 5.80282C12.9181 7.42389 12.4469 9.04208 11.448 10.3279L15.728 14.5919L14.592 15.7279L10.328 11.4559H10.32ZM6.40001 11.1999C7.03035 11.1999 7.65453 11.0758 8.23689 10.8345C8.81925 10.5933 9.3484 10.2397 9.79412 9.79403C10.2398 9.3483 10.5934 8.81916 10.8346 8.23679C11.0759 7.65443 11.2 7.03026 11.2 6.39991C11.2 5.76957 11.0759 5.1454 10.8346 4.56303C10.5934 3.98067 10.2398 3.45152 9.79412 3.0058C9.3484 2.56008 8.81925 2.20651 8.23689 1.96529C7.65453 1.72407 7.03035 1.59991 6.40001 1.59991C5.12697 1.59991 3.90607 2.10563 3.0059 3.0058C2.10572 3.90597 1.60001 5.12687 1.60001 6.39991C1.60001 7.67295 2.10572 8.89385 3.0059 9.79403C3.90607 10.6942 5.12697 11.1999 6.40001 11.1999Z" fill="black" />
          </svg>
          </button>
        </form>
        {
          page === "login"
            ? <Link href="/" className={s["main-header-login"]}>Logout</Link>
            : <Link href="/login" className={s["main-header-login"]}>Login</Link>
        }
      </div>
      <div className={s["main-header-row-second"]}>
        <ul className={s["main-header-list"]}>
          {categories.map((category) => {
            const id = category.toLowerCase().replace(/ /g, "-")
            return (
              <li key={id} className={id === slug ? s["main-header-list-item-active"] : s["main-header-list-item"]}>
                <Link href={`/${id}`}>
                  {category}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
