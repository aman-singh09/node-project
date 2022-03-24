const express = require('express')
const app = express()
const mongoose= require('mongoose')
const userRouter = require('./routes/user.route')
const placeRouter= require('./routes/place.route')
const indexRouter= require('./routes/index.route')
const bodyParser =require('body-parser')

const URL= 'mongodb+srv://amansingh:aman@cluster0.xlsxx.mongodb.net/Vymo-Project?retryWrites=true&w=majority'
mongoose.connect(URL).then(() =>{
    console.log('Connection Successful!');
},(err) =>{
    console.log('Connection Error',err)
})

app.listen(5000);
app.use(bodyParser.urlencoded({extended :false}));

app.use('/',indexRouter);
app.use('/users',userRouter);
app.use('/places',placeRouter)
