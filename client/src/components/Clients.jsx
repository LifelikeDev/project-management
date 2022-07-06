import React from "react";
import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <p>Loading Clients...</p>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Oops! Something broke...</p>;
  }

  return (
    <>
      {!loading && !error && (
        <>
          <h3 className="text-center">Clients</h3>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Clients;
