const latLong = require('./latLong')
const temperature = require('./temperature')
const express = require('express');
const app = express();
const fs = require('fs');


app.get('/',getTemp).listen(9000, () => console.log('Example app listening on port 9000!'));

function getTemp(req,resp){
    //extracting address from request 
    var address = req.query.address;
    
    //formatting address to encode special characters
    address = encodeURIComponent(address);
    
    //callback function which first gets latitude and longitude from latLong.js
    // and then calls temperature.js to get temperature
    latLong.getLatLong(address,(returnObj)=>{
        temperature.temp(returnObj,(returnObj)=>{resp.send(returnObj)});
    })
}