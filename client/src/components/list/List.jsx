import { useContext } from 'react'
import style from './../list/list.module.scss'
import Card from '../card/Card'
import { Container } from '../../App'

function List() {
  const { blogList } = useContext(Container)

  return (
    <div className={style.list}>
      <h3>Input´s list</h3>

      <section>
        {blogList?.map((blog, i) => {
          return (
            <Card
              key={i}
              title={blog?.title}
              autor={blog?.autor}
              content={blog?.content}
              date={blog?.date}
            />
          )
        })}
      </section>
    </div>
  )
}

export default List
