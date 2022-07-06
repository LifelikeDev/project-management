import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { FaTrash } from "react-icons/fa";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const {data} = useQuery(GET_PROJECTS);

  console.log({data});

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    // refetchQueries: [{ query: GET_PROJECTS }],
    update(cache, { data: { deleteProject } }) {
        const { projects } = cache.readQuery({ query: GET_PROJECTS });
        cache.writeQuery({
          query: GET_PROJECTS,
          data: {
            projects: projects.filter((project) => project.id !== deleteProject.id),
          },
        });
      },
  });

  return (
    <div className="d-flex mt-5 ms-auto ">
      <button className="btn btn-danger" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
