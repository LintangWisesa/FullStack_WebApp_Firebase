const fire = require('firebase-admin')
const key = require('./key.json')

fire.initializeApp({
    credential: fire.credential.cert(key)
})
const db = fire.firestore()

module.exports = db