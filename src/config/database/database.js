import mongoose from "mongoose";



const connection = async() =>{
    try {
        mongoose.connect(
            process.env.DB_LINK,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
    } catch (error) {
        console.log(error.message)

    }
}

export default connection
