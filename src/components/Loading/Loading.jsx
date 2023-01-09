import React from "react";
import "./index.scss";

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <section className="w-100 p-4 d-flex justify-content-center pb-4">
      <div id="loading-test" className="position-absolute">
        <div
          className="loading loading-spinner position-absolute"
          data-mdb-parent-selector="#loading-test"
        >
          <div
            className="spinner-border loading-icon"
            role="status"
            id=""
          ></div>
          <span className="loading-text">Loading...</span>
        </div>
        <div
          className="loading-backdrop position-absolute"
          id="loading-backdrop"
        ></div>
      </div>
    </section>
  );
};

export default Loading;
