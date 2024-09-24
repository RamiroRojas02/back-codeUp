import express from 'express'
import placeController from '../controllers/placeController.js'
import validator from '../validator/validator.js'
import placeSchema from '../validator/schemas/placeSchema.js'
const placeRouter = express.Router()


placeRouter.get('/',placeController.getPlaces)
placeRouter.get('/:id',placeController.getById)

placeRouter.post('/',validator(placeSchema),placeController.create)




export default placeRouter