const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book{
        bookId: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth{
        token: String
        user: [User]
    }

    type savedBooks{
        authors: [String]
        description: String
        title: String!
        bookId: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        
    }
`;

module.exports = typeDefs;