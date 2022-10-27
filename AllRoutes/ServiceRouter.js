const express = require('express');
const serviceRouter=express.Router();
const mongoose = require('mongoose');
const serviceSchema= require('../Schemas/serviceSchema')
const serviceModel=new mongoose.model("Service",serviceSchema);


//Get All Servive............
serviceRouter.get('/all',async(req,res)=>{
     try{
        const all_service=await serviceModel.find();
         res.status(200).send(all_service);
         console.log(all_service)

     }catch(error){
        res.status(500).send({"Error":"Server Side Error"});
        console.log(error);
     }
})

serviceRouter.get("/:id",async(req, res)=>{
       
    try{
        const getOneService=await serviceModel.find({_id:req.params.id});
         res.status(200).send(getOneService);
         console.log(getOneService)

     }catch(error){
        res.status(500).send({"Error":"Server Side Error"});
        console.log(error);
     }
})

// Post One New Service 
serviceRouter.post('/',async(req,res)=>{

   
   try{
      const modelService=new serviceModel(req.body)
      const addedNewService=await modelService.save();
      res.status(200).send(addedNewService);
      console.log(addedNewService);
   }catch(error){
      res.status(500).send({"error":"Server Sided Error"});
   }

    
})
//Delete One Service from Data Base
serviceRouter.delete('/:id',async(req,res)=>{

   try{
      const deletedService=await serviceModel.findOneAndDelete(
         {_id:req.params.id},{useFindOneAndDelete:false}
         
         )

      res.status(200).send(deletedService);
      console.log("Deleted SERVICE:",deletedService);

 }catch(error){
   res.status(500).send({"error":"Server Sided Error in Deleting"});
   console.log("Deleted SERVICE Error:",error);
 }
 
})



module.exports=serviceRouter;



