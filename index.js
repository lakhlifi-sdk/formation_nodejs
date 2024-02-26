const express = require("express")
const  bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
const UserRoute = require('./routes/User')


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.uri, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', async (req, res)=>{
    res.json({
       "message":"this is default response" 
    })
})

app.listen(82, ()=> {
    console.log("this server runing on port 82 ")
})


app.use('/user',UserRoute)
