const { buildSchema } = require("graphql");
const schema = buildSchema(`
  enum Gender{
    L
    P
  }

  type Profile{
    _id : ID!
    namaDepan: String!
    namaBelakang : String!
    alamat : String!
    avatar : String!
    gender : Gender
  }

  input profileInputData{
    _id : ID!
    namaDepan: String
    namaBelakang : String
    alamat : String
    avatar : String
    gender : Gender
  }

  input profileParams{
    params : String!
  }

  type ProfileData{
    data : [Profile!]!
    total : Int!
  }
  
  type RootQuery {
    hello: String!
    getAllProfiles : ProfileData
    getProfileById(params: String): Profile!
  }

  type RootMutation {
    createProfile(profileInput: profileInputData): Profile!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
