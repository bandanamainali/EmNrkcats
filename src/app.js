const express = require ('express');
require("./db/conn");
const app= express();
const port= process.env.PORT ||3000;
const Student = require("./models/students");
app.use(express.json());
app.post("/api/student",(req,res)=>{
    res.end("hello from the other side");
    console.log(req.body);
    const user = new Student(req.body);
    user.save();
})
app.get("/api/student",async (req,res)=>{
    try{
     const data= await Student.find();
     res.send(data);
     console.log(res);
    }catch(e){
     res.send(e);
    }

})
app.get("/student/:id", async (req,res)=>{
    try{
        const _id= req.params.id;
        const sdata = await Student.findById(_id);
        console.log(sdata);
        if(!sdata){
            return res.status(404).send("page not found");

        }else{
            res.send(sdata);
        }

    }catch(e){
        res.send(e);
    }
})
app.listen(port,()=>{
    console.log("connection is setup");
})