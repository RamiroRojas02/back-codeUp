import express from 'express'
import eventController from '../controllers/eventController.js'

const eventRouter = express.Router()


eventRouter.get('/',eventController.getEvents)
eventRouter.get('/:id',eventController.getEventById)
eventRouter.post('/',eventController.create)




export default eventRouter