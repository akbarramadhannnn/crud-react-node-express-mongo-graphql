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
    email : String
    password : String
    msg: String
  }

  input profileInputData{
    namaDepan: String
    namaBelakang : String
    alamat : String
    avatar : String
    gender : Gender
    email : String
    password : String
  }

  input profileParams{
    params : String!
  }

  type ProfileData{
    data : [Profile!]!
    total : Int!
  }
  
  type RootQuery {
    getAllProfiles : ProfileData
    getProfileById(id: String): Profile!
    auth(email : String!, password : String!): Profile!
  }

  type RootMutation {
    createProfile(profileInput: profileInputData): Profile!
    deleteProfile(id:ID!): Profile!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
