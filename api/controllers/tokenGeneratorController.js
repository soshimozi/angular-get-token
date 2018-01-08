var request = require("request");
exports.generateToken = function(req, res) {

    var options = { method: 'POST',
        url: 'https://bitwisemobile.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"myAZojKEl1DSbMy0YHo8tNW5RM2TACRW","client_secret":"FhMn70xtgGgh3rktniltNZfo9NbKl8JLY2mF65b2Kdfd1xzKI1tI72utreLec1D6","audience":"https://cps-api-gateway","grant_type":"client_credentials"}' };

    request(options, function (error, response, body) {
        if (error) res.send(error);
        res.json(body);
    });
};
