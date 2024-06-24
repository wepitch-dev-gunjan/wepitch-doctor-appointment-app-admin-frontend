import React from "react";
import "./style.scss";

const AppointmentsTable = () => {
  const appointments = [
    {
      name: "Abu Isthiyak",
      department: "Gastroenterology",
      doctor: "Joe Larson",
      id: "05",
      phone: "+811 847-4958",
      date: "18/12/2020",
      status: "Waiting",
      assistant: "Janet Snyder",
    },
    {
      name: "Amelia Grant",
      department: "Medicine",
      doctor: "Patrick Newman",
      id: "10",
      phone: "+124 394-1787",
      date: "12/02/2021",
      status: "Visited",
      assistant: "Ernesto Vargas",
    },
    {
      name: "Kristen Hawkins",
      department: "Orthopaedics",
      doctor: "Emma Walker",
      id: "02",
      phone: "+168 603-2320",
      date: "12/03/2021",
      status: "Visited",
      assistant: "Janet Snyder",
    },
    {
      name: "Tommy Vasquez",
      department: "Cardiology",
      doctor: "Jane Montgomery",
      id: "15",
      phone: "+439 271-5360",
      date: "12/04/2021",
      status: "Canceled",
      assistant: "Ernesto Vargas",
    },
    {
      name: "Alejandro Haynes",
      department: "Orthopaedics",
      doctor: "Emma Walker",
      id: "11",
      phone: "+639 130-3150",
      date: "12/05/2021",
      status: "Waiting",
      assistant: "Janet Snyder",
    },
    {
      name: "Brooke Harmon",
      department: "Orthopaedics",
      doctor: "Emma Walker",
      id: "12",
      phone: "+963 309-1706",
      date: "12/05/2021",
      status: "Visited",
      assistant: "Janet Snyder",
    },
    {
      name: "Trevor Miller",
      department: "Gastroenterology",
      doctor: "Joe Larson",
      id: "13",
      phone: "+811 985-4846",
      date: "12/05/2021",
      status: "Visited",
      assistant: "Ernesto Vargas",
    },
    {
      name: "Lonnie Ferguson",
      department: "Orthopaedics",
      doctor: "Emma Walker",
      id: "14",
      phone: "+942 238-4474",
      date: "12/05/2021",
      status: "Waiting",
      assistant: "Janet Snyder",
    },
    {
      name: "Mack Kennedy",
      department: "Medicine",
      doctor: "Patrick Newman",
      id: "19",
      phone: "+123 447-2384",
      date: "12/02/2021",
      status: "Visited",
      assistant: "Ernesto Vargas",
    },
    {
      name: "Inez Wilkerson",
      department: "Medicine",
      doctor: "Patrick Newman",
      id: "20",
      phone: "+463 471-7173",
      date: "12/02/2021",
      status: "Visited",
      assistant: "Patrick Newman",
    },
  ];

  return (
    <div className="appointments-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Department</th>
            <th>Doctor</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Status</th>
            <th>Assistant</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{appointment.name}</td>
              <td>{appointment.department}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.id}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.date}</td>
              <td className={`status ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </td>
              <td>{appointment.assistant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
