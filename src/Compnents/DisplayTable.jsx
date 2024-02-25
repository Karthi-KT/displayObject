// import React from "react";
import PropTypes from "prop-types";
// import StudentData from "../studentData.js";

const DisplayTable = (StudentData) => {
  console.log(typeof StudentData);
  console.log(Array.isArray(StudentData)); 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>{student.attendance}</td>
              <td>{student.Result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DisplayTable.propTypes = {
  StudentData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      marks: PropTypes.number.isRequired,
      attendance: PropTypes.number.isRequired,
      Result: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default DisplayTable;
