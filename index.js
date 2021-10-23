const express = require("express")
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(config.secret)  
        console.log("conected to database "+ config.db);
    }
    
});

app.use(express.static(__dirname + '/client/dist/client'));
app.use('/authentication', authentication);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, ()=>{
    console.log("it is running");
});