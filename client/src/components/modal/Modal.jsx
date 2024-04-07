import style from './../modal/modal.module.scss'
import styles from './../card/card.module.scss'
import classNames from './../../helpers/helper'

import Button from '../button/Button'

// eslint-disable-next-line react/prop-types
const Modal = ({ title, autor, content, date, closeModal }) => {
  return (
    <div className={style.overlay}>
      <div className={classNames(styles.card, style.card)}>
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
          {content}
        </p>

        <p>
          <b>Date:</b>
          {date}
        </p>
      </div>
      <Button className={style.btn} type='button' onClick={closeModal}>
        X
      </Button>
    </div>
  )
}

export default Modal
