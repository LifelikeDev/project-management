import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h2>404</h2>
      <p>Sorry! The content you're looking for cannot be found.</p>
      <Link to="/" className="btn btn-primary">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
