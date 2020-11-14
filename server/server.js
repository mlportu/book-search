const express = require('express');
const path = require('path');
// const routes = require('./routes');

//Import Apollo server
const { ApolloServer } = require('apollo-server-express');

//import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();
//create new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//integrate Apollos server with Express application as middleware
server.applyMiddleware({app});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
