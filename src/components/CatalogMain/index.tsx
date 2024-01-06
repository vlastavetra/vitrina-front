import Link from "next/link"
import { useRouter } from "next/router"
import Filters from "../Filters"
import Cardboard from "../Cardboard"
import s from "./styles.module.scss"

export default function CatalogMain({ cards }) {
  const router = useRouter()
  const page = router.pathname.substring(1)

  return (
    <main className={s["catalog-wrapper"]}>
      <Filters />
      <Cardboard cards={cards} />
    </main>
  )
}
