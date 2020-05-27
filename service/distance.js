var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "O9QwwS6jLrvMj25AYBO3XNYfUI3HcDc2ubwEn724UFqFc9AiQkasolw4rtRUBC4B";
const zipCodeURL = process.env.ZIP_CODE_API_BASE_URL || 'https://www.zipcodeapi.com/rest/';

var distance = {
  find: function(req, res, next) {
    request(zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode1 + '/' + req.params.zipcode2 + '/mile',
    function (error, response, body) {
      if (!error && response && response.statusCode == 200) {
        response = JSON.parse(body);
        res.send(response);
      } else {
        // console.log(response.statusCode + response.body);
        res.send({distance: -1});
      }
    });
  }
};

module.exports = distance;
