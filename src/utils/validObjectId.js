import { isValidObjectId } from "mongoose";

function validatObjectId(id) {
    return isValidObjectId(id)
}

export default validatObjectId