const express = require('express')
const app = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: "public"})
})


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})