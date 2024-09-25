import eventService from "../services/eventService.js";
import CustomError from "../utils/customError.js";
import catched from "../utils/catched.js";
import validatObjectId from "../utils/validObjectId.js";
import placeServices from "../services/placeService.js";

const eventCrontroller ={

    async create(req,res){
        const placeId = req.body.placeId
        const event = req.body.event      
        const validatePlaceId = validatObjectId(placeId)

        if(!validatePlaceId) throw new CustomError('Not valid Id',404)

        const placeExist = await placeServices.getById(placeId)
        // console.log(placeExist);
        
        if(!placeExist) throw new CustomError(`Place doesn't exist`,404)

        if(eventService.isAlreadyBooked(placeExist.events,event.date)) throw new CustomError('Date already occupied',409)
        
        
        
        const newEvent = await eventService.createEvent(event)

        const eventBooked = await eventService.bookEventToPlace(placeExist._id,newEvent._id)
        
        
        res.status(201).json({error:false, response: {newEvent,eventBooked}})
        
    },
    async getEvents(req,res){
        const query = req._parsedUrl.query;
        const events = await eventService.getEventsByQuery(query);
    
        if (!events) throw new CustomError('Not found',404);

        res.status(201).json({error:false,response:events})
    },    
    async getEventById(req,res){
        const eventId = req.params.id

        const validate = validatObjectId(eventId)
        if(!validate) throw new CustomError('Not valid Id',404)
        const event = await eventService.getEventById(eventId)
        if(!event) throw new CustomError('Event not exist whith this id',404)
        res.status(201).json({error:false,response:event})

    },async bookAtendance(req,res){
        const eventId = req.body.eventId
        const user = req.body.user
    
        const validate = validatObjectId(eventId)
        if(!validate) throw new CustomError('Not valid Id',404)
        const event = await eventService.getEventById(eventId)
        if(!event) throw new CustomError('Event not exist whith this id',404)
        
        if(!eventService.reachMinimunAge(event.minimunAge,user.age)) throw new CustomError(`${user.name} is not old enough to attend this event`,409)
    
        if(event.attendees.length === event.place.ocupancy)throw new CustomError(`Event full`,409)
      }
    

        

}


export default {
    create: catched(eventCrontroller.create),
    getEvents:catched(eventCrontroller.getEvents),
    getEventById:catched(eventCrontroller.getEventById)
}