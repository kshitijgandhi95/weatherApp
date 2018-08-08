//api key - cfe392d37837556273a5d315b399b813
//url - https://api.darksky.net/forecast/cfe392d37837556273a5d315b399b813/37.8267,-122.4233

const axios = require('axios');
const prefixUrl = "https://api.darksky.net/forecast/cfe392d37837556273a5d315b399b813/";

module.exports.temp = (returnObj,callback)=>{
    var completeUrl = prefixUrl + returnObj.geolocation.latitude + "," + returnObj.geolocation.longitude;
    
    axios.get(completeUrl).then(function (response) {
        returnObj.weather = response.data.currently;
        callback(returnObj)
      }).catch(function (error) {
        console.log(error);
      });
}