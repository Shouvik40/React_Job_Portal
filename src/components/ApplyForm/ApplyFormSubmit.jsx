import React, { useState } from "react";
import "./ApplyFormSubmit";
import AppForm from "./Appform/form";
const ApplyFormSubmit = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      {!formSubmitted ? (
        <div>
          <h2 className="center-text italicize" style={{ marginTop: "15px" }}>
            Apply for Job
          </h2>
          <AppForm onApply={handleFormSubmit} />
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Form submitted successfully!</h2>
        </div>
      )}
    </div>
  );
};

export default ApplyFormSubmit;
