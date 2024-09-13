import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import indexRouter from './routes/indexRouter.js'
import database from './config/database/database.js'

dotenv.config()
database()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', indexRouter)

app.listen(process.env.PORT)
