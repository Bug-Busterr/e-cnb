import mongoose from "mongoose";

const dbConnect = () => {
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

export default dbConnect;
