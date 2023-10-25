const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/restapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connectée à la base de donnée Mongo');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

// connectDB();
//Midleware qui traite les données de la req

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/post", require("./routes/post.routes"));

const port = 5000;
app.listen(port, ()=>console.log("le serveur à demarrer au port :"+port));


