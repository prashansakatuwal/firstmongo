import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;
const connection_url = 'mongodb+srv://admin:host123@cluster.2xctd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

app.get("/", (req,res) => res.status(200).send("HELLO WORLD"));

app.listen(port, () => console.log(`Server is running on Port: ${port}`));
