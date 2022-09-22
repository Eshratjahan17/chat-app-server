const express = require('express') ;
const cors = require('cors');
const mongoose = require('mongoose');
const app=express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
const port =process.env.PORT||5000;


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.iwsmtfs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run(){
  try{

     await client.connect();
     const usersCollection = client.db("chat-app").collection("users");

      app.post("/user", async (req, res) => {
        const data = req.body;
        const result = await usersCollection.insertOne(data);
        res.send(result);
      });

  }finally{

  }
  console.log("db connected");
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
