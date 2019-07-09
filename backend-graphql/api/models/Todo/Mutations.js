var addTodo = require('./Mutations/CreateTodo').addTodo
var updateTodo = require('./Mutations/UpdateTodo').updateTodo
var deleteTodo = require('./Mutations/DeleteTodo').remove

module.exports = {
    addTodo,
    updateTodo,
    deleteTodo
}
