// src/AddAppointment.js
import React, { useState } from "react";
import "./style.scss";

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    appointmentDate: "",
    serialNo: "",
    department: "",
    doctor: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="add-appointment" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mobile No</label>
        <input
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Appointment Date</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Serial No</label>
        <input
          type="text"
          name="serialNo"
          value={formData.serialNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="department1">Department 1</option>
          <option value="department2">Department 2</option>
        </select>
      </div>
      <div>
        <label>Doctor</label>
        <select name="doctor" value={formData.doctor} onChange={handleChange}>
          <option value="">Select Doctor</option>
          <option value="doctor1">Doctor 1</option>
          <option value="doctor2">Doctor 2</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="status1">Status 1</option>
          <option value="status2">Status 2</option>
        </select>
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AddAppointment;
