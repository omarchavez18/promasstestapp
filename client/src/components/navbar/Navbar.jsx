import style from '../navbar/navbar.module.scss'
import Button from '../button/Button'
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <h1>Promass test</h1>

      <section className={style.sectionSearch}>
        <form>
          <label>Search:</label>
          <input type='text' />
        </form>
        <Button type='submit'>submit</Button>
      </section>
    </nav>
  )
}

export default Navbar
