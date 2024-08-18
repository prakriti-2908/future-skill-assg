const express = require('express');
const mongoose = require('mongoose');
const cardSchema = require('./schemas/cardSchema');
const cors = require('cors');
require('dotenv').config();



const app = express();

const PORT = process.env.PORT;

MONGO_URI=process.env.MONGO_URI
// DB connection
mongoose.connect(MONGO_URI).then(()=>{
    console.log("MongoDB is connected");

}).catch((err)=>{
    console.log(err);
});


// middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/ping',(req,res)=>{
    return res.send("Server is working");
});

app.post('/cards',async(req,res)=>{
    const {title,description,link} = req.body;

    if(!title){
        return res.send({
            status:"401",
            message:"Title is missing",
        })
    }
    if(!description){
        return res.send({
            status:"401",
            message:"Description is missing",
        })
    }
    if(!link){
        return res.send({
            status:"401",
            message:"Link is missing",
        })
    }


    try {
        const newCard = new cardSchema({
            title,
            description,
        });
        await newCard.save();
        return res.send({
            status:201,
            message:"Card is created successfully",
            link,
            card:newCard,
        })
    } catch (error) {
        return res.send({
            status:500,
            message:"Internal server error",
            error
        })
    }
})


app.get('/cards',async(req,res)=>{
    try {
        const allCards = await cardSchema.find({});
        return res.send({
            status:200,
            message:"All Cards are fetched Successfully",
            allCards
        })
    } catch (error) {
        return res.send({
            status:500,
            message:"Internal Server Error",
            error
        })
    }
})

app.get('/cards/:title',async(req,res)=>{
    try {
        const title = req.params.title;

        const requiredCard = await cardSchema.find({title});

        if(!requiredCard){
            return res.send({
                status:204,
                message:`No card found with title : ${title}`
            })
        }

        return res.send({
            status:201,
            message:"Card is found successfully",
            requiredCard
        })
    } catch (error) {
        return res.send({
            status:500,
            message:"Internal Server Error",
            error
        })
    }
})



app.listen(PORT,()=>{
    console.log(`Server listening on : http://localhost:${PORT}/`);
})
