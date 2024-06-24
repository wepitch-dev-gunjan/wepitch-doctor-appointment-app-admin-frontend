import React from "react";
import "./style.scss";
import DoctorNurseCard from "../../common/components/doctor/doctorCard";

const doctors = [
  {
    name: "Victoria Lynch",
    status: "Doctor",
    designation: "FCPS",
    department: "Gastroenterology",
    joinDate: "24 Jun 2015",
    contact: "+88 01713-123656",
    email: "info@softnio.com",
    photo: "path/to/photo1.jpg",
    initials: "VL",
  },
  {
    name: "Abu Bin Ishtiyak",
    status: "Doctor",
    designation: "MBBS, FCPS",
    department: "Medicine",
    joinDate: "24 Jun 2015",
    contact: "+88 01713-123656",
    email: "info@softnio.com",
    photo: "",
    initials: "AB",
  },
  {
    name: "Abu Bin Ishtiyak",
    status: "Doctor",
    designation: "MBBS, FCPS",
    department: "Medicine",
    joinDate: "24 Jun 2015",
    contact: "+88 01713-123656",
    email: "info@softnio.com",
    photo: "",
    initials: "AB",
  },
  {
    name: "Abu Bin Ishtiyak",
    status: "Doctor",
    designation: "MBBS, FCPS",
    department: "Medicine",
    joinDate: "24 Jun 2015",
    contact: "+88 01713-123656",
    email: "info@softnio.com",
    photo: "",
    initials: "AB",
  },
  {
    name: "Abu Bin Ishtiyak",
    status: "Doctor",
    designation: "MBBS, FCPS",
    department: "Medicine",
    joinDate: "24 Jun 2015",
    contact: "+88 01713-123656",
    email: "info@softnio.com",
    photo: "",
    initials: "AB",
  },
  // Add more doctor/nurse objects here
];

const DoctorManagement = () => {
  return (
    <div className="doctor-nurse-list">
      <div className="heading">
        <h1>Doctor/Nurse</h1>
        <button className="add-button">+ Add Doctor/Nurse</button>
      </div>
      <div className="card-grid">
        {doctors.map((doctor, index) => (
          <DoctorNurseCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorManagement;
