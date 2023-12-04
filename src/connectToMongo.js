import mongoose from "mongoose"

require("dotenv").config()
const MONGO_DB = process.env.MONGO_DB
export async function connectToMongoDB() {
  console.clear()
  try {
  
    await mongoose.connect(MONGO_DB,{
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log('Conexión a MongoDB establecida con éxito!')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message)
  }
}