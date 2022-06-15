import { gql } from "@apollo/client";

// get clients query
export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
