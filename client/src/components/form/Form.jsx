import style from './../form/form.module.scss'
import { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import Button from '../button/Button'
import btnStyle from './../button/button.module.scss'
import { Container } from '../../App'

const Form = () => {
  const { blogList, setBlogList } = useContext(Container)

  const [blogInfo, setBlogInfo] = useState({
    title: '',
    autor: '',
    content: '',
  })

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setBlogList(response.data)
    })
  }, [setBlogList])

  function getCurrentDate() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const requestDate = getCurrentDate()

  function submitInfo() {
    Axios.post('http://localhost:3001/api/insert', {
      title: blogInfo.title,
      autor: blogInfo.autor,
      content: blogInfo.content,
      date: requestDate,
    }).then(
      setBlogList([
        ...blogList,
        {
          title: blogInfo.title,
          autor: blogInfo.autor,
          content: blogInfo.content,
          date: requestDate,
        },
      ])
    )
    reset()
  }

  function handleInputChange(e) {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value })
  }

  function handleContent(e) {
    const text = e.target.value
    setBlogInfo({ ...blogInfo, content: text })
  }

  function reset() {
    setBlogInfo({ content: '', title: '', autor: '' })
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
        onClick={submitInfo}
      >
        submit
      </Button>

      <Button type='button' onClick={reset} className={btnStyle.btn}>
        reset
      </Button>
    </div>
  )
}

export default Form
