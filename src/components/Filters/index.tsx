import Link from "next/link"
import { useRouter } from "next/router"
import Cardboard from "../Cardboard"
import s from "./styles.module.scss"

export default function Filters() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <form className={s["filters-wrapper"]}>
      <fieldset className={s["filters-fieldset"]}>
        <legend className={s["filters-legend"]}>Categories</legend>
        <ul className={s["filters-categories-list"]}>
          <li className={s["filters-categories-item"]}>
            <Link href={`/${slug}/category-1`}>
              Category 1
            </Link>
          </li>
          <li className={s["filters-categories-item"]}>
            <Link href={`/${slug}/category-2`}>
              Category 2
            </Link>
          </li>
          <li className={s["filters-categories-item"]}>
            <Link href={`/${slug}/category-3`}>
              Category 3
            </Link>
          </li>
        </ul>
      </fieldset>
      <fieldset className={s["filters-fieldset"]}>
        <legend className={s["filters-legend"]}>Price</legend>
      </fieldset>
    </form>
  )
}
