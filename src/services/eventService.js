import Event from "../models/eventModel.js";
import Place from "../models/placeModel.js";

const eventService = {
  async createEvent(event) {
    return await Event.create(event);
  },
  async bookEventToPlace(placeId, eventId) {
    return await Place.findByIdAndUpdate(
      placeId,
      { $push: { events: eventId } },
      { new: true, useFindAndModify: false }
    );
  },
  async isAlreadyBooked(placeEventsDate, eventDate) {
    let dateToCompare = new Date(eventDate).getTime();
    const dateBooked = placeEventsDate.filter(
      (element) => new Date(element.date).getTime() === dateToCompare
    );
    
    return dateBooked? true : false;
  },
  async getEventsByQuery(query){
    let querys = {}
    if (query) {
        
        query = query.split('&')

        query.forEach(element => {
            let [key,value] = element.split('=')
            querys[key] = { $regex: value , $options: 'i'} 
        });
      }
    return await Event.find(querys)
  },
  async getEventById(id){
    return await Event.findById(id).populate({path: 'place',select : 'ocupancy'})
  },
  reachMinimunAge(eventMinimunAge,userAge){
    return eventMinimunAge <= userAge
  },

};

export default eventService;
