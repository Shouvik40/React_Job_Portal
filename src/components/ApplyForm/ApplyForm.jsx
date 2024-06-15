import React, { useState } from "react";
import "./form.css";
const ApplyForm = ({ onApply }) => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    PermanentAddress: "",
    contactNumber: "",
    Cgpa: "",
    skills: "",
    Resume: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactNumber") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: digitsOnly,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      Resume: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onApply(formData);

    setFormData({
      Firstname: "",
      Lastname: "",
      email: "",
      PermanentAddress: "",
      contactNumber: "",
      Cgpa: "",
      skills: "",
      Resume: "",
    });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div class="row g-3 ">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" placeholder="Firstname" onChange={handleInputChange} required />
              <label for="floatingInput">First name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating">
              <input type="text" class="form-control" placeholder="Lastname" onChange={handleInputChange} required />
              <label>Last name</label>
            </div>
          </div>
        </div>
        <div>
          <br />
          <label>Gender</label>
          <br />

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" required />
            <label class="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
        </div>

        <br />

        <div>
          <div class="form-floating">
            <input type="email" class="form-control" placeholder="email" onChange={handleInputChange} required />
            <label>Email</label>
          </div>
        </div>
        <br />

        <div>
          <div class="form-floating">
            <input type="text" class="form-control" placeholder="PeramnentAddress" onChange={handleInputChange} required />
            <label>Permanent Address</label>
          </div>
        </div>
        <br />
        <div>
          <div class="form-floating">
            <input type="tel" pattern="[0-9]{10}" class="form-control" placeholder="contactNumber" onChange={handleInputChange} required />
            <label>Contact Number</label>
          </div>
        </div>

        <br />
        <div>
          <select class="form-select" aria-label="Default select example" required>
            <option value="" disabled selected>
              Highest Qualification
            </option>
            <option value="1">B.E/B.Tech</option>
            <option value="2">BCA/B.sc</option>
            <option value="3">Post Graduate</option>
          </select>
        </div>
        <br />
        <div>
          <div class="form-floating">
            <input type="text" class="form-control" placeholder="CGPA" onChange={handleInputChange} required />
            <label>CGPA/Percentage</label>
          </div>
        </div>
        <br />

        <div>
          <select class="form-select" aria-label="Default select example" required>
            <option value="" disabled selected>
              Experience
            </option>
            <option value="1">0-1 years</option>
            <option value="2">2-3 years</option>
            <option value="3">3-4 years</option>
            <option value="3">5+ years</option>
          </select>
        </div>
        <br />

        <div>
          <div class="form-floating">
            <input type="text" class="form-control" placeholder="skills" onChange={handleInputChange} required />
            <label>Skills</label>
          </div>
        </div>
        <br />
        <div>
          <label>Resume</label>
          <input type="file" class="form-control" placeholder="Resume" onChange={handleFileChange} required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForm;
