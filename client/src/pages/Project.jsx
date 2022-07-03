import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Oops! Something broke...</p>;
  }

  return (
    <>
      {!error && !loading && (
        <div className="mx-auto w-75 p-5 card">
          <Link
            to="/"
            className="btn btn-light btn-sm w-25 d-inline ms-auto mb-2"
          >
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h6 className="mt-3" style={{ fontSize: "16px" }}>
            Project Status
          </h6>
          <p className="lead" style={{ fontSize: "14px" }}>
            {data.project.status}
          </p>

          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
