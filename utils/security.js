const crypto = require('crypto')

module.exports = (str) => {
    const security = {
        secretKey: "contrasena",
        expiresIn: "hola"
    }
    return crypto
        .createHash('sha1')
        .update(`${security.secretKey}${str.toString()}`)
        .digest('hex')
}