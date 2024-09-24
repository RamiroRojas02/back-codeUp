import mongoose from "mongoose";



const connection = async() =>{
    try {
        mongoose.connect(
            process.env.DB_LINK,
        )
    } catch (error) {
        console.log(error.message)

    }
}

export default connection
