import { useState, useContext } from 'react'
import style from './../list/list.module.scss'
import Card from '../card/Card'
import { Container } from '../../App'
import Button from '../button/Button'
import Modal from '../modal/Modal'

function List() {
  const { blogList } = useContext(Container)
  const [searchValue, setSearchValue] = useState('')
  const [inputLocated, setInputLocated] = useState([])
  const [showModal, SetShowModal] = useState({ show: false, post: null })

  function handleSearchValue(e) {
    setSearchValue(e.target.value)
  }

  function findInput(blogList, searchValue) {
    let inputReturnInfo = []
    blogList.forEach((objectData) => {
      if (
        objectData.title.match(searchValue)?.length ||
        objectData.autor.match(searchValue)?.length ||
        objectData.content.match(searchValue)?.length
      ) {
        inputReturnInfo.push(objectData)
      }
    })
    return setInputLocated(inputReturnInfo)
  }

  function find() {
    findInput(blogList, searchValue)
    setSearchValue('')
  }

  function deleteResult() {
    setInputLocated([])
  }

  function showModalCard(id) {
    const [blog] = blogList.filter((blog) => blog.id == id)
    SetShowModal({ ...showModal, show: true, post: blog })
  }

  function closeModalCard() {
    SetShowModal(false)
  }

  return (
    <div className={style.list}>
      <h3>Input´s list</h3>

      <section className={style.sectionSearch}>
        <form>
          <label>Search input with title, autor or content:</label>
          <input type='text' value={searchValue} onChange={handleSearchValue} />
        </form>

        <Button
          disabled={!searchValue || searchValue == ' '}
          type='submit'
          onClick={find}
        >
          submit
        </Button>

        <Button
          disabled={inputLocated.length == 0}
          type='submit'
          onClick={deleteResult}
        >
          delete result
        </Button>
      </section>

      {inputLocated.length != 0 && <h3>filter Input</h3>}
      {inputLocated &&
        inputLocated?.map((input, i) => {
          return (
            <Card
              key={i}
              title={input?.title}
              autor={input?.autor}
              content={input?.content}
              date={input?.date}
              id={input.id}
              showCard={showModalCard}
            />
          )
        })}

      <h3>all list Input´s</h3>
      <section>
        {blogList?.map((blog, i) => {
          return (
            <Card
              key={i}
              title={blog?.title}
              autor={blog?.autor}
              content={blog?.content}
              date={blog?.date}
              id={blog.id}
              showCard={showModalCard}
            />
          )
        })}
      </section>
      {showModal.show && showModal.post && (
        <Modal closeModal={closeModalCard} {...showModal.post} />
      )}
    </div>
  )
}

export default List
