import Link from "next/link"
import { useRouter } from "next/router"
import Card from "../Card"
import s from "./styles.module.scss"

export default function Cardboard({ cards }) {
  const router = useRouter()
  const page = router.pathname.substring(1)

  return (
    <div className={s["cardboard-wrapper"]}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}
