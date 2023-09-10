import { useState } from "react"
import ToggleBtn from "./ToggleBtn"
import LinkBtn from "./LinkBtn"
import Tag from "./Tag"

interface CardData {
  id: number
  icon: string
  name: string
  company: string
  category: string
  website: string
  dlURL: string
  price: string
  platforms: string
}

interface Props {
  data: CardData;
}

export default function Card(props: Props) {
  const { id, icon, name, company, category, website, dlURL, price, platforms }: CardData = props.data;
  const [isOpen, setOpenState] = useState(false)
  const toggle = () => setOpenState(!isOpen)

  const openPart = <>
    <hr className="card__seperator" />
    <div className="card__part card__part--down">
      <Tag text={category} icon='list' />
      <Tag text={company} icon='buildings' />
      <Tag text={price} icon='currency-circle-dollar' />
      <Tag text={platforms} icon='windows-logo' />
    </div>
  </>
  
  return (
    <div className="card">
      <div className="card__part card__part--up">
        <img src={ icon } alt={ name } className="card__image" />
        <span className="card__name">{ name }</span>
        <div className="card__btns">
          <LinkBtn link={ dlURL } icon='download-simple' text='install' />
          <LinkBtn link={ website } icon='link' text='visit wesbite' />
          <ToggleBtn isOpen={ isOpen } onClick={ toggle } />
        </div>
      </div>
      { isOpen && openPart}
    </div>
  )
}