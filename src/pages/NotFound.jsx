import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-primary fw-bolder" style={{ fontSize: "200px" }}>
        Oops!
      </h1>
      <h5 className="fw-bold">404 - PAGE NOT FOUND</h5>
      <p className="w-50 m-auto mb-3">
        The page you are looking for might have been removed had its name change
        or is temporary unavailable.
      </p>
      <Link
        to={"/"}
        className="bg-primary text-white border-0 p-3 fw-bold rounded-4 text-decoration-none"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
