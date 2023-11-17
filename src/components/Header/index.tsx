import Link from 'next/link'
import { useRouter } from 'next/router'
import s from "./styles.module.scss"

export default function Header() {
  const router = useRouter()
  const page = router.pathname.substring(1)
  return (
    <header className={s["main-header"]}>
      <h1 style={{ fontFamily: 'Barlow Semi Condensed', fontWeight: 'normal' }}>VITRINA</h1>
      <nav>
        <ul className={s["main-header-list"]}>
          <li>
            {
              page === 'login'
                ? <Link href="/">Logout</Link>
                : <Link href="/login">Login</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}
