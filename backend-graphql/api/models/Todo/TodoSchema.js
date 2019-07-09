var GraphQLSchema = require('graphql').GraphQLSchema
var GraphQLObjectType = require('graphql').GraphQLObjectType
var query = require('./Queries').listTodos
var mutation = require('./Mutations')

exports.TodoSchema = new GraphQLSchema({
    query: query,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})
