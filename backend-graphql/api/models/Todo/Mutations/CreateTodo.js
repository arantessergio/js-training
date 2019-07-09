var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var GraphQLBoolean = require('graphql').GraphQLBoolean
var TodoType = require('../TodoType')
var TodoModel = require('../Todo')
exports.addTodo = {
    type: TodoType.todoType,
    args: {
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        done: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    },
    resolve: async (root, args) => {
        const uModel = new TodoModel(args)
        const todo = await uModel.save()
        if (!todo) {
            throw new Error('error')
        }
        return todo
    }
}
