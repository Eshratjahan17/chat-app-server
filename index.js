const express = require('express') ;
const cors = require('cors');
const mongoose = require('mongoose');
const app=express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
const port =process.env.PORT||5000;


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser:true, useUnifiedTopology:true  }, (err) => {
 
    console.log("db connected");
  
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
