var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLString = require('graphql').GraphQLString
var GraphQLBoolean = require('graphql').GraphQLBoolean
var TodoType = require('../TodoType')
var TodoModel = require('../Todo')

exports.updateTodo = {
    type: TodoType.todoType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        done: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    },
    resolve: async (root, args) => {
        const UpdatedTodo = await TodoModel.findByIdAndUpdate(args.id, args)
        if (!UpdatedTodo) {
            throw new Error('Error')
        }
        return UpdatedTodo
    }
}
