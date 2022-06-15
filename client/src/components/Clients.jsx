import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
      clients {
        id
        name
        email
        phone
      }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Something broke...</p>;
  }

  return <>{!loading && !error && <h2>Clients</h2>}</>;
};

export default Clients;
