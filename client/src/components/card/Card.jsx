/* eslint-disable react/prop-types */
import style from './../card/card.module.scss'
import Button from '../button/Button'

const Card = ({ title, autor, content, date, id, showCard }) => {
  return (
    <>
      <div className={style.card}>
        <p>
          <b>Title:</b>
          {title}
        </p>

        <p>
          <b>Author:</b>
          {autor}
        </p>

        <p>
          <b>Content:</b>
          {content.slice(0, 70)}
        </p>

        <p>
          <b>Date:</b>
          {date}
        </p>

        <Button
          type='button'
          onClick={() => {
            showCard && showCard(id)
          }}
        >
          show card
        </Button>
      </div>
    </>
  )
}

export default Card
