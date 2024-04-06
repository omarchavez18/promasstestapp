const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'listdatabase',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insert', (req, res) => {
  const title = req.body.title
  const autor = req.body.autor
  const content = req.body.content
  const date = req.body.date

  const sqlInsert =
    'INSERT INTO blog_posts (title, autor, content, date) VALUES  (?,?,?,?)'
  db.query(sqlInsert, [title, autor, content, date], (err, result) => {
    console.log(result)
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log('running on port 3001')
})
