module.exports = (app) => {
    const TodoController = require('../controllers/Todo')

    app.route('/todos')
        .get(TodoController.list)
        .post((req, res) => TodoController.create(req, res))

    app.route('/todos/:id')
        .get(TodoController.get)
        .put((req, res) => TodoController.update(req, res))
        .delete((req, res) => TodoController.delete(req, res))
}
