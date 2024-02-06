const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes/userRouter')

app.use(routes)

app.listen(port, () => {
    console.log(`FastCo Server Is Running on ${port}.`)
})