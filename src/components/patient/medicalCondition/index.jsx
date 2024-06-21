import React from "react";
import "./style.scss"; // Import the SCSS file
import { RichTextEditorComponent } from "@syncfusion/ej2-react-richtexteditor";

const MedicalCondition = () => {
  return (
    <div className="medical-condition">
      <h2>Medical Condition</h2>
      <p>Details information about patient current medical condition.</p>
      <div className="personalData">
        <div className="form-group Symptoms-Title">
          <label htmlFor="symptomsTitle">Symptoms Title</label>
          <input
            className=""
            type="text"
            id="symptomsTitle"
            name="symptomsTitle"
            placeholder="Symptoms"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="symptomsType">Symptoms Type</label>
          <select id="symptomsType" name="symptomsType">
            <option value="">Select Symptoms</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="casualty">Casualty</label>
          <select id="casualty" name="casualty">
            <option value="">Select Casualty</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select id="department" name="department">
            <option value="">Select Department</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="consultantDoctor">Consultant Doctor</label>
          <select id="consultantDoctor" name="consultantDoctor">
            <option value="">Select Doctor</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="patientType">Patient Type</label>
          <select id="patientType" name="patientType">
            <option value="">Select Type</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="admitDate">Admit Date</label>
          <input
            type="date"
            id="admitDate"
            name="admitDate"
            placeholder="dd-mm-yyyy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select id="bloodGroup" name="bloodGroup">
            <option value="">Select Group</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedNumber">Bed Number</label>
          <select id="bedNumber" name="bedNumber">
            <option value="">Select Bed</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="testReport">Test Report</label>
          <input type="file" id="testReport" name="testReport" />
        </div>
        <div className="form-group">
          <label htmlFor="symptomsDescription">Symptoms Description</label>
          <textarea
            id="symptomsDescription"
            name="symptomsDescription"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MedicalCondition;
