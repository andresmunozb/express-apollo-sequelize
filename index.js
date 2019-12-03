const express = require('express')
const ApolloServer = require('apollo-server-express').ApolloServer

const typeDefs = require("./graphql/types")
const resolvers = require("./graphql/resolvers")
const models = require("./models")
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.applyMiddleware({ app });

app.use(express.static("app/public"));

require('./templates/template')

models.sequelize.sync({ alter: true, force: true }).then(() => {
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  });
});