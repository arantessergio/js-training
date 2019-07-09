var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLList = require('graphql').GraphQLList
var TodoModel = require('../Todo')
var TodoType = require('../TodoType').todoType

exports.TodoQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            todos: {
                type: new GraphQLList(TodoType),
                resolve: async () => {
                    const tds = await TodoModel.find()
                    if (!tds) {
                        throw new Error('error while fetching data')
                    }
                    return tds
                }
            }
        }
    }
})
