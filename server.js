const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')

const userRouter = require('./controllers/users')


app.use('/users', userRouter)


app.listen(4003)