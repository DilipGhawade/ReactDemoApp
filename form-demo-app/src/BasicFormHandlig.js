import React from "react";
import { useState } from "react";

const BasicFormHandling = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setError({ ...error, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const errorCopy = { ...error };
    for (const filed in formValues) {
      if (!formValues[filed]) {
        formValid = false;
        errorCopy[filed] = true;
      }
    }
    setError(errorCopy);
    if (formValid) {
      console.log("Form submitted with values: ", formValues);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {error.name && (
            <div className="text-danger">Please Enter Your Name</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {error.email && (
            <div className="text-danger">
              Please Enter a valid Email address!
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Message: </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          {error.message && (
            <div className="text-danger">Please Enter a Message</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicFormHandling;
