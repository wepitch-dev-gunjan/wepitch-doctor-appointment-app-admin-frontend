import React from "react";
import "./style.scss"; // Import the SCSS file
import PersonalDetail from "../../components/patient/personalDetail";
import GeneralInfo from "../../components/patient/generalInfo";
import MedicalCondition from "../../components/patient/medicalCondition";

const PatientForm = () => {
  return (
    <div className="patient-form">
      <form>
        <PersonalDetail />
        <GeneralInfo />
        <MedicalCondition />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
