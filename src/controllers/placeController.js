import placeServices from "../services/placeService.js";
import CustomError from "../utils/customError.js";
import catched from "../utils/catched.js";
import validatObjectId from "../utils/validObjectId.js";

const placeCrontroller = {
  async create(req, res) {
    const data = req.body;
    if (!data) throw new CustomError('Please Submit Data',409)

    const placeExist = await placeServices.placeExist(data.address);
    
    if (placeExist.length !== 0) throw new CustomError("Place already exist", 409);

    const newPlace = await placeServices.create(data);
    res.status(201).json({ error: false, response: newPlace });
  },
  async getPlaces(req, res) {
    const query = req._parsedUrl.query;
    
    const places = await placeServices.getPlacesByQuery(query);
    
    if (!places) throw new CustomError('Not found',404);
    
    res.status(201).json({error:false, response:places})

  },
  async getById(req,res){
    const placeId = req.params.id
    
    const validate = validatObjectId(placeId)
    if(!validate) throw new CustomError('Not valid Id',404)
    const place = await placeServices.getById(placeId)
    res.status(201).json({error:false, response:place})

  }
};

export default {
  create: catched(placeCrontroller.create),
  getPlaces: catched(placeCrontroller.getPlaces),
  getById: catched(placeCrontroller.getById),

};
