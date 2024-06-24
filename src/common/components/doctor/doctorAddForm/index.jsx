import React, { useState } from "react";
import "./style.scss";

const AddDoctorNurseForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    designation: "",
    department: "",
    specialist: "",
    nationalId: null,
    certificates: null,
    uploadPhoto: null,
    joiningDate: "",
    status: "Active",
    shortBiography: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-doctor-nurse-form">
      {/* <div className="doctor-Form"> */}
      <div className="details">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="details">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Designation</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {/* Add department options here */}
        </select>
      </div>
      <div className="details">
        <label>Specialist</label>
        <input
          type="text"
          name="specialist"
          value={formData.specialist}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>National ID</label>
        <input type="file" name="nationalId" onChange={handleChange} />
      </div>
      <div className="details">
        <label>Certificates</label>
        <input
          type="file"
          name="certificates"
          multiple
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Upload Photo</label>
        <input type="file" name="uploadPhoto" onChange={handleChange} />
      </div>
      <div className="details">
        <label>Joining Date</label>
        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
        />
      </div>
      <div className="details">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="details">
        <label>Short Biography</label>
        <textarea
          name="shortBiography"
          value={formData.shortBiography}
          onChange={handleChange}
        ></textarea>
      </div>
      {/* </div> */}
      <button type="submit">Add Doctor/Nurse</button>
    </form>
  );
};

export default AddDoctorNurseForm;
