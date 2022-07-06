import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center my-4">
        <div>
          <p>Loading Projects...</p>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex align-items-center justify-content-center my-4">
        <h2>Oops! Something broke while loading Projects...</h2>
      </div>
    );
  }

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row card my-4 bg-light">
          <h3 className="text-center my-3">Projects</h3>
          <div className="row">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};

export default Projects;
