import React from "react";

const OffersComponent = ({ title, image, desc, link }) => {
  return (
    <div className="card">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img src={image} className="img-fluid" alt="my image" aria-hidden />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#!" className="btn btn-primary">
          Get the details
        </a>
      </div>
    </div>
  );
};

export default OffersComponent;
