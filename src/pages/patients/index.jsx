import React from "react";
import "./style.scss"; // Import the SCSS file
import PersonalDetail from "../../common/components/patient/personalDetail";
import GeneralInfo from "../../common/components/patient/generalInfo";
import MedicalCondition from "../../common/components/patient/medicalCondition";

const Patients = () => {
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

export default Patients;
