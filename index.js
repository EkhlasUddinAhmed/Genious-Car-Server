const express = require('express');
const app = express();
const cors=require('cors');

const port=process.env.PORT ||5000;
const mongoose=require('mongoose');
const serviceRouter = require('./AllRoutes/ServiceRouter');
require('dotenv').config()

//Database Connection Starting.........
const config={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
             };
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.13y3n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// console.log(uri) to Check Database Coonection uri is OK
mongoose.connect(uri,config)
.then(()=>{
    app.listen(port,()=>{
        console.log(" After Connecting Database Server is Listening  at port:",port);
    });

})
.catch((error)=>{
    console.log("Error",error);
})
//Database Connection Ending.........


app.use(cors());
app.use(express.json());

app.use("/service",serviceRouter)

// app.get('/sevices',(req, res)=>{
//         console.log("Server is Ok");
//         res.status(200).send({"name":"Ekhlas"})
// })



function errorHandler(err, req, res, next){

    if(res.headersSent){
    return next(err);
    }
    res.status(500).json({error:err})
    }
    




//mongodb+srv://ekhlas:<password>@cluster0.13y3n.mongodb.net/?retryWrites=true&w=majority
// pass:TsJKkkvNnUs5ee9L
//user: belal



// const uri = "mongodb+srv://belal:TsJKkkvNnUs5ee9L@cluster0.13y3n.mongodb.net/EkhlasDB?retryWrites=true&w=majority";