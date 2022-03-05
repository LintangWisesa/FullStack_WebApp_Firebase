const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({origin: true}))
app.use(express.json())

const db = require('./config/db')
const studentDb = db.collection('/students')

app.get('/', (req, res)=>{
    res.status(200).json({status:200, message:'Hello World'})
})

app.get('/students', async (req, res)=>{
    let data = []
    const students = await studentDb.get()
    students.forEach(doc => {
        data.push({
            id: doc.id,
            nama: doc.data().nama,
            usia: doc.data().usia,
            waktu: doc.data().waktu.toDate(),
        })
    })
    res.status(200).json({status:200, students:data})
})

app.post('/students', (req, res)=>{
    const body = req.body
    let time = new Date()
    studentDb.doc(time.toISOString()).set({
        nama: body.nama,
        usia: body.usia,
        waktu: time
    })
    res.status(200).json({status:200, students:{
        nama: body.nama,
        usia: body.usia,
        waktu: time
    }})
})

exports.lintang = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions: BLAZE plan
// // https://firebase.google.com/docs/functions/write-firebase-functions
// // $ firebase deploy