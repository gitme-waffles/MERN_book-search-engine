const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Integer
    savedBooks: [Book]
  }
  type Book {
    _id: ID!
    authors: [String!]!
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input SaveBookInput {
    bookAuthor: [String!]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
