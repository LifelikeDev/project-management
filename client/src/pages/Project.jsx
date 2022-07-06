import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import { FaPen } from "react-icons/fa";

const Project = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center my-4">
        <div>
          <p>Loading Project...</p>
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
      {!error && !loading && (
        <div className="mx-auto w-75 p-5 card">
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowUpdateForm(true)}
            >
              <FaPen className="icon" /> Edit Project
            </button>
            <Link
              to="/"
              className="btn btn-secondary btn-sm w-25 d-inline ms-auto mb-2"
              style={{ textDecoration: "none" }}
            >
              Back
            </Link>
          </div>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h6 className="mt-3" style={{ fontSize: "16px" }}>
            Project Status
          </h6>
          <p className="lead" style={{ fontSize: "14px" }}>
            {data.project.status}
          </p>

          <ClientInfo client={data.project.client} />

          {showUpdateForm && (
            <EditProjectForm
              setShowUpdateForm={setShowUpdateForm}
              project={data.project}
            />
          )}

          <DeleteProjectButton projectId={id} />
        </div>
      )}
    </>
  );
};

export default Project;
