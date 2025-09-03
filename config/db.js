import mongoose from "mongoose";

export const connectToDataBase = () => {
  return new Promise((res, rej) => {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        res("DB connected successfully");
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  });
};


export async function disconnectFromDataBase(){
    try{
        await mongoose.connection.close();
        console.log('Database disconnected successfully');
    } catch(err) {
        console.error('Error disconnecting from database:', err);
        throw err;
    }
}
