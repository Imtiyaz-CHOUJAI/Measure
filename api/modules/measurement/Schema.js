import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type User {
    id: Int!
    name: String!
    avatar: String
    created_at: Date
    updated_at: Date
  }

  type Measurement {
    id: Int!
    weight: String!
    user: User!
    created_at: Date
    updated_at: Date
  }

  type Query {
    measurements(user: Int): [Measurement]
  }

  input StoreMeasurementInput {
    weight: Int!
    userId: Int!
  }

  input UpdateMeasurementInput {
    weight: Int!
  }

  type Mutation {
    store(input: StoreMeasurementInput!): Measurement
    update(id: Int!, input: UpdateMeasurementInput!): Measurement
    delete(id: Int!): String
  }
`;

export default typeDefs;
