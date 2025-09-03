import app from "./app.js";
import dotenv from "dotenv";
import { connectToDataBase, disconnectFromDataBase } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
let server;

connectToDataBase()
  .then((msg) => {
    console.log(msg);
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
