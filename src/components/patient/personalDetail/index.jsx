import React from "react";

const PersonalDetail = () => {
  return (
    <div className="personal-detail">
      <h2>Personal Info</h2>
      <p>Add common information like Name, Email etc</p>
      <div className="personalData">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" placeholder="dd-mm-yyyy" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Phone no" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="nationalId">National ID</label>
          <input type="file" id="nationalId" name="nationalId" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
