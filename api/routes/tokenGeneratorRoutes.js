module.exports = function(app) {
    var tokenGenerator = require('../controllers/tokenGeneratorController')

    app.route('/token')
    .post(tokenGenerator.generateToken);
}