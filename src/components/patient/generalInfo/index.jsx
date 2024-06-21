import React from "react";

const GeneralInfo = () => {
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <p>Some common medical information about patient.</p>
      <div className="personalData">
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select id="bloodGroup" name="bloodGroup">
            <option value="">Select Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height">Height</label>
          <input type="text" id="height" name="height" placeholder="Height" />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="Weight" />
        </div>
        <div className="form-group">
          <label htmlFor="bloodPressure">Blood Pressure</label>
          <input
            type="text"
            id="bloodPressure"
            name="bloodPressure"
            placeholder="Blood Pressure"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pulse">Pulse</label>
          <input type="text" id="pulse" name="pulse" placeholder="Pulse" />
        </div>
        <div className="form-group">
          <label htmlFor="temperature">Temperature</label>
          <input
            type="text"
            id="temperature"
            name="temperature"
            placeholder="Temperature"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
