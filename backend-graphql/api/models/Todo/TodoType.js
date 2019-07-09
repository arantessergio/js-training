var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLID = require('graphql').GraphQLID
var GraphQLString = require('graphql').GraphQLString
var GraphQLBoolean = require('graphql').GraphQLBoolean
exports.todoType = new GraphQLObjectType({
    name: 'todo',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            description: { type: GraphQLString },
            done: { type: GraphQLBoolean }
        }
    }
})
