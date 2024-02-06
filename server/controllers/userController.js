const services = require('../services/userService')


const login = async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Received login request for user ${email}`)
    const result = await services.login(email, password)
    return res.status(200).json(result)
}

module.exports = login;