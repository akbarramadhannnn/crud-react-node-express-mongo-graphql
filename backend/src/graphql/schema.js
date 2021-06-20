const { buildSchema } = require("graphql");
const schema = buildSchema(`
  enum Gender{
    L
    P
  }

  type Query {
    getProfileById(_id: Int!): Profile
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
    namaDepan: String!
    namaBelakang : String!
    alamat : String!
    avatar : String!
    gender : Gender
  }

  type ProfileData{
    data : [Profile!]!
    total : Int!
  }

  type ProfileById{
    data : Profile!
  }

  type RootQuery {
    hello: String!
    getAllProfiles : ProfileData
    getProfileById : ProfileById
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
