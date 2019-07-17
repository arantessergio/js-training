module.exports = app => {
    const TodoController = require('../controllers/Todo')

    app.route('/todos/:id')
        .get(TodoController.get)
        .put((req, res) => TodoController.update(req, res))
        .delete((req, res) => TodoController.delete(req, res))

    app.route('/schedules/:id/todos')
        .post((req, res) => TodoController.create(req, res))
        .get(TodoController.list)
}
