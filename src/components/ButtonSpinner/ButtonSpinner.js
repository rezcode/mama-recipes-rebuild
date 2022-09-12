import React from "react";

const ButtonSpinner = () => {
  return (
    <button className="btn btn-primary text-white" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />{" "}
      Loading...
    </button>
  );
};

export default ButtonSpinner;
