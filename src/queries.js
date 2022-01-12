import { gql } from "@apollo/client";

export const GET_MEASUREMENTS = gql`
  query Measurements {
    measurements {
      id
      weight
      created_at
    }
  }
`;
