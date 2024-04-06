import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import List from './components/list/List'
export const Container = React.createContext(null)

function App() {
  const [blogList, setBlogList] = useState()
  return (
    <Container.Provider value={{ blogList, setBlogList }}>
      <Navbar />
      <Form />
      <List />
    </Container.Provider>
  )
}

export default App
