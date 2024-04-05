import style from './../list/list.module.scss'
import Card from '../card/Card'

function List() {
  return (
    <div className={style.list}>
      <h3>Input´s list</h3>

      <section>
        <Card
          title={'Harry Potter'}
          autor={'J.K Rowling'}
          content={'best seller '}
          date={Date()}
        />
      </section>
    </div>
  )
}

export default List
