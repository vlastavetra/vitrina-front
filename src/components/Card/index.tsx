import Link from "next/link"
import Image from "next/image"
import s from "./styles.module.scss"

export default function Card({ card }) {
  const url = `/product/${card.name}`
  return (
    <div key={card.id} className={s["card-wrapper"]}>
      <Link href={url}>
        <img src={card.image} alt={card.name} className={s["card-img"]} />
      </Link>
      <div>
        <Link href={url}>
          <h3 className={s["card-name"]}>{card.name}</h3>
        </Link>
        <p className={s["card-shop-name"]}>{card.shop.name}</p>
        <p className={s["card-price"]}>{card.price}</p>
      </div>
    </div>
  )
}
