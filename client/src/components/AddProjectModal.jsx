import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaList } from "react-icons/fa";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const submitForm = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return window.alert("Please enter appropriate values...");
    }

    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
  };

  if (loading) {
    return null;
  }

  if (error) {
    return <p>Oops! Something broke...</p>;
  }

  return (
    !loading &&
    !error && (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addProjectModal"
        >
          <div className="d-flex align-items-center">
            <FaList className="icon" />
            <span>Add Project</span>
          </div>
        </button>

        <div
          className="modal fade"
          id="addProjectModal"
          aria-labelledby="addProjectModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProjectModalLabel">
                  New Project
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Add Client Form */}
                <form onSubmit={submitForm}>
                  <div className="mb-3 mx-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-3 mx-3">
                    <label className="form-label">Status</label>
                    <select
                      id="status"
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="new">Not Started</option>
                      <option value="progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="mb-3 mx-3">
                    <label className="form-label">Client</label>
                    <select
                      id="clientId"
                      className="form-select"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                    >
                      <option value=''>Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                          {client.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary m-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default AddProjectModal;
