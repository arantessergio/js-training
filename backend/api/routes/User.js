module.exports = (app) => {
    const UserController = require('../controllers/User')

    app.route('/users')
    .post(( req, res ) => UserController.create(req, res))

    app.route('/users/auth')
    .post((req, res) => UserController.auth(req,res))

    app.route('/users/:id')
    .get(UserController.get)
}