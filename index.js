/*require('dotenv').config()
const express = require('express')
const graphqlExpress = require('apollo-server-express').graphqlExpress

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const myGraphQLSchema = {}


// bodyParser is needed just for POST.
app.use('/graphql', express.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(port, () => { console.log(`API REST running in http://localhost:${port}`) })*/



const express = require('express')
const ApolloServer = require('apollo-server-express').ApolloServer
const gql = require('apollo-server-express').gql

const typeDefs =  require("./schema")
const resolvers = require("./resolver")
const db = require("./models")

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});