const { ApolloServer } = require('@apollo/server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { expressMiddleware } = require('@apollo/server/express4')
const { default: axios } = require('axios')

const startServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs: `
        type User{
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
        }

        type Todo {
            id: ID!
            title: String!
            completed: Boolean
            user: User
        }
            
        type Query {
            getTodos: [Todo]
            getAllUser: [User]
            getUser(id:ID!): User
        }
                `,
        resolvers: {
            Todo: {
                user:
                    async (todo) =>
                        (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data
            },
            Query: {
                getTodos:
                    async () =>
                        (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
                getAllUser:
                    async () =>
                        (await axios.get('https://jsonplaceholder.typicode.com/users')).data,
                getUser:
                    async (parent, { id }) =>
                        (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        },
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start()

    app.use('/graphQL', expressMiddleware(server))

    app.listen(5000, () => {
        console.log("Server Started at 5000")
    })
}

startServer()