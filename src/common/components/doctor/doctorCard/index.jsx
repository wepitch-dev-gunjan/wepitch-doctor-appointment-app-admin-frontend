import React from "react";
import "./style.scss";

const DoctorNurseCard = ({ doctor }) => {
  return (
    <div className="doctor-nurse-card">
      <div className="card-header">
        <div className="avatar">
          {doctor.photo ? (
            <img src={doctor.photo} alt={doctor.name} />
          ) : (
            <div className="initials">{doctor.initials}</div>
          )}
        </div>
        <div className="name-status">
          <h3>{doctor.name}</h3>
          <span className="status">{doctor.status}</span>
        </div>
      </div>
      <div className="card-body">
        <p>{doctor.designation}</p>
        <div className="details">
          <div className="fields">
            <p>Department:</p> <p>{doctor.department}</p>
          </div>
          <div className="fields">
            <p>Join Date:</p>
            <p> {doctor.joinDate}</p>
          </div>
          <div className="fields">
            <p>Contact:</p> <p>{doctor.contact}</p>
          </div>
          <div className="fields">
            <p>Email:</p>
            <p> {doctor.email}</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default DoctorNurseCard;
