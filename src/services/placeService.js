import placeModel from "../models/placeModel.js";

const placeServices = {
  async create(data) {
    return await placeModel.create(data);
  },
  async placeExist(address) {
    return await placeModel.find({ address: address });
  },
  async getPlacesByQuery(query) {
    
    
    let querys = {}
    if (query) {
        
        query = query.split('&')

        query.forEach(element => {
            let [key,value] = element.split('=')
            querys[key] = { $regex: value , $options: 'i'} 
        });
    }
    
    
    return await placeModel.find( querys );
  },
  async getById(placeId){
    return await placeModel.findById(placeId).populate({path:"events",select:"date"})
  },
};

export default placeServices;
