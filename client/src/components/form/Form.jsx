import style from './../form/form.module.scss'
import { useState } from 'react'
import Button from '../button/Button'
import btnStyle from './../button/button.module.scss'
function Form() {
  const [title, setTitle] = useState('')
  const [autor, setAutor] = useState('')
  const [content, setContent] = useState('')

  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(true)
  }

  function reset() {
    setTitle('')
    setAutor('')
    setContent('')
    setShow(false)
  }
  return (
    <div className={style.formContainer}>
      <h2>FORM</h2>
      <form className={style.form}>
        <label> Title:</label>
        <input
          required
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label>Autor:</label>
        <input
          required
          type='text'
          value={autor}
          onChange={(e) => {
            setAutor(e.target.value)
          }}
        />
        <label> Content:</label>
        <textarea
          required
          className={style.textarea}
          type='text'
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
      </form>
      <Button
        className={btnStyle.btn}
        disabled={title === '' || autor === '' || content === ''}
        type='button'
        onClick={handleShow}
      >
        submit
      </Button>

      <Button type='button' onClick={reset} className={btnStyle.btn}>
        reset
      </Button>
      {show && <p>{title}</p>}
      {show && <p>{autor}</p>}
      {show && <p>{content}</p>}
    </div>
  )
}

export default Form