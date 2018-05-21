const schema = `
  type User {
    id: ID!
    email: String!
    first: String!
    last: String!
  }

  type Project {
    id: String
    title: String
    created: Int
    owners: [User]
  }

  type Query {
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User

    getProjById(id: ID!): Project
  }

  type Mutation {
    createUser(email: String!): User
    createProj(email: String!): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;
