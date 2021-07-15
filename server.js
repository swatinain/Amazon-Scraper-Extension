const express=require('express');
// const morgan=require("morgan");
const mongoose=require('mongoose');
// const fs=require("fs");
// var cors = require('cors');
const port=80;
const app=express();
// app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const dbURI="mongodb+srv://swati123:nain@cluster0.fi4nq.mongodb.net/project?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('Connected to db'))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.send("Hi, I am the server.");
});
app.post("/save-products", (req, res) => {
    console.log("req.body in save-products route: ", req.body)
    res.send("Where am I printed?")
});


app.listen(port,()=>{
    console.log(`Application started at port  ${port}`);
});