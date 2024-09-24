import express from 'express'
import userRouter from './userRouter.js'
import placeRouter from './placeRouter.js'
import eventRouter from './eventRouter.js'


const indexRouter = express.Router()


indexRouter.use('/user', userRouter)
indexRouter.use('/place', placeRouter)
indexRouter.use('/event', eventRouter)




export default indexRouter