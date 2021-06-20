const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Profile {
    _id : ID!
    namaDepan: String!
    namaBelakang : String!
    alamat : String!
  }

  input profileInputData{
    namaDepan: String!
    namaBelakang : String!
    alamat : String!
  }

  type RootMutation {
    createProfile(profileInput: profileInputData): Profile!
  }

  type RootQuery {
    hello: String!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
