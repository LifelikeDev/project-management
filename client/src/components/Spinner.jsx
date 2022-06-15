import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status"></div>
      <span className="sr-only"></span>
    </div>
  );
};

export default Spinner;
