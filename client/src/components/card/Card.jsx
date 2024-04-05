/* eslint-disable react/prop-types */
import style from './../card/card.module.scss'
import Button from '../button/Button'

function showInfo() {}

const Card = ({ title, autor, content, date }) => {
  return (
    <>
      <div className={style.card}>
        <p>
          <b>Title:</b>
          {title}
        </p>

        <p>
          <b>Autor:</b>
          {autor}
        </p>

        <p>
          <b>Content:</b>
          {content}
        </p>

        <p>
          <b>Date:</b>
          {date}
        </p>

        <Button type='button' onClick={showInfo}>
          show card
        </Button>
      </div>
    </>
  )
}

export default Card
