import style from './../form/form.module.scss'
import { useState } from 'react'
import Button from '../button/Button'
import btnStyle from './../button/button.module.scss'

const Form = () => {
  const [limitContent, setLimitContent] = useState('')
  const [show, setShow] = useState(false)

  const [blogInfo, setBlogInfo] = useState({
    title: '',
    autor: '',
    content: '',
  })

  function handleInputChange(e) {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value })
  }

  function handleContent(e) {
    const text = e.target.value
    setBlogInfo({ ...blogInfo, content: text })
    setLimitContent(blogInfo.content.slice(0, 70))
  }

  function handleShow() {
    setShow(true)
  }

  function reset() {
    setBlogInfo({ content: '', title: '', autor: '' })
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
          value={blogInfo.title}
          name='title'
          onChange={handleInputChange}
        />
        <label>Autor:</label>
        <input
          required
          type='text'
          value={blogInfo.autor}
          name='autor'
          onChange={handleInputChange}
        />
        <label> Content:</label>
        <textarea
          required
          className={style.textarea}
          type='text'
          name='content'
          value={blogInfo.content}
          onChange={(e) => {
            handleContent(e)
            handleInputChange(e)
          }}
        />
      </form>
      <Button
        className={btnStyle.btn}
        disabled={
          blogInfo.title === '' ||
          blogInfo.autor === '' ||
          blogInfo.content === ''
        }
        type='button'
        onClick={handleShow}
      >
        submit
      </Button>

      <Button type='button' onClick={reset} className={btnStyle.btn}>
        reset
      </Button>
      {show && <p>{blogInfo.title}</p>}
      {show && <p>{blogInfo.autor}</p>}
      {show && <p>{blogInfo.content}</p>}
      {show && <p>{limitContent}</p>}
    </div>
  )
}

export default Form
