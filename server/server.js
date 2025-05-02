require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const { mongoose } = require('mongoose')
app.use(cors())
app.use(express.json())
const { connectDb } = require('./db/mongodb')
const middleUser = require('./middleware/middleware.user')
const routUser = require('./router/router.user')

app.use(middleUser)

app.use('/member/', routUser)


const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDb(process.env.URI_DB)
        app.listen(PORT, () => {
            console.log(`running on port: ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}
start()