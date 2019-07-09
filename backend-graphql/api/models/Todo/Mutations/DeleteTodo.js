var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var TodoType = require('../TodoType')
var TodoModel = require('../Todo')

exports.remove = {
    type: TodoType.todoType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        const removedTodo = await TodoModel.findByIdAndRemove(args.id)
        if (!removedBook) {
            throw new Error('error')
        }
        return removedTodo
    }
}
