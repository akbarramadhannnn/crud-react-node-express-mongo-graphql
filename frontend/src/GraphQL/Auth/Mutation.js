import { gql } from '@apollo/client';

export const SIGN_IN_USER = gql`
  mutation register(
    $namaDepan: String!
    $namaBelakang: String!
    $gender: Gender
    $email: String!
    $password: String!
  ) {
    register(
      profileInput: {
        namaDepan: $namaDepan
        namaBelakang: $namaBelakang
        gender: $gender
        email: $email
        password: $password
      }
    ) {
      msg
      namaDepan
    }
  }
`;
