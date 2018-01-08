var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/public',express.static('./public'))

var routes = require('./api/routes/tokenGeneratorRoutes');
routes(app);

app.listen(port);

console.log('token generator API server started on: ' + port);
