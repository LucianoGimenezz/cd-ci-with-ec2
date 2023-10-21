import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/about', (req, res) => {
    res.json({ message: 'about page' })
})

app.listen(PORT)