const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 8080

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.post('/login', (req, res) => {
    res.status(200).json({ message: `User with email ${req.body.email} is logged in successfully` })
    res.json({ message: 'Hello World, from express' });
});

app.listen(port, () => {
    console.log(`FastCo Server Is Running on ${port}.`)
})