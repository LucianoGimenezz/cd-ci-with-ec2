import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/about', (req, res) => {
    res.json({ message: 'about page' })
})

app.get('/sum', (req, res) => {
    const {  num1, num2  } = req.query
    res.json({result: Number(num1) + Number(num2)})
})

app.listen(PORT)