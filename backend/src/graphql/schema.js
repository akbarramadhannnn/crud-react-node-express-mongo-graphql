const { buildSchema } = require("graphql");
const schema = buildSchema(`
  enum Gender{
    L
    P
  }

  type Profile{
    _id : ID!
    email : String
    password : String
    namaDepan: String!
    namaBelakang : String!
    alamat : String
    gender : Gender
    avatar : String!
    msg: String
  }

  input profileInputData{
    email : String!
    password : String!
    namaDepan: String!
    namaBelakang : String!
    alamat : String
    gender : Gender
    avatar : String
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
    register(profileInput: profileInputData): Profile!

    createProfile(profileInput: profileInputData): Profile!
    deleteProfile(id:ID!): Profile!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
