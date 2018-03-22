var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

var yourApiKey = '2RXTKS0JWT1SIIM6';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey,'compact',true);
var jsonfile = require('jsonfile')
var fs = require('fs')

var data;
var array = [];
var i = 0;

alphaVantageAPI.getDailyData('AAPL')
    .then(dailyData => {
        console.log("Daily data:");
        //console.log(dailyData);
        data = dailyData;
        traitement();
    })
    .catch(err => {
        console.error(err);
    });
    
    
function traitement(){
    jsonfile.writeFile('../json/bdd.json', data, function(err) {
    if (err) {
        console.error(err)
      }
    console.log('la base de donnée est créée');
    });
   // console.log(" Volume0 "+data[0].Volume);
   console.log(data[1]);
   for (i = 0; i < data.length; i++) 
   {
    array[i] = data[i].Volume;
    }
}


