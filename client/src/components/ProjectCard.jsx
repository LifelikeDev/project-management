import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title">{project.name}</h6>

            <a href={`/projects/${project.id}`} className="btn btn-secondary">View</a>
          </div>
          <small>Status: <strong>{project.status}</strong></small>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
