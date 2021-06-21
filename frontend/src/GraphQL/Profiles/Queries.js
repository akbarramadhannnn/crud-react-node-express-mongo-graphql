import { gql } from '@apollo/client';

export const LOAD_PROFILES = gql`
  query {
    getAllProfiles {
      data {
        namaDepan
        namaBelakang
      }
    }
  }
`;
