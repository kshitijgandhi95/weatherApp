//basic url - https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA0o1jFgaVaNiaSzfPza2EAXY18NyFIZv8
//apikey - AIzaSyA0o1jFgaVaNiaSzfPza2EAXY18NyFIZv8

const axios = require('axios');
const temperature = require('./temperature')

const prefixUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const suffixUrl = "&key=AIzaSyA0o1jFgaVaNiaSzfPza2EAXY18NyFIZv8";


module.exports.getLatLong =  (address,callback)=>{
    var completeUrl = prefixUrl+address+suffixUrl;
    
    axios.get(completeUrl).then(function (response) {
      returnObj = {}
      geoLocation = {}
      geoLocation.formattedAddress = response.data.results[0].formatted_address;
      geoLocation.latitude = response.data.results[0].geometry.location.lat;
      geoLocation.longitude = response.data.results[0].geometry.location.lng;
      
      returnObj.geolocation = geoLocation;
    callback(returnObj);
  }).catch(function (error) {
    console.log(error);
  });
}