// import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../style.css";
import DisplayData from "./DisplayData";

const Header = ({ StudentData }) => {
  const [searchKey, setSearchKey] = useState("");
  const [sortkey, setSortKey] = useState("default");
  const [displayData, setDisplayData] = useState(StudentData);
  const [searchResult, setSearchResult] = useState("");

  const handleSearchChange = () => {
    const searchDisplay = StudentData.filter((student) =>
      student.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setSearchResult(searchDisplay);
    // <DisplayData setDisplayData={setDisplayData} />;
  };

  const sortByMark = () => {
    const sortedByMarks = [...StudentData];
    sortedByMarks.sort((a, b) => b.marks - a.marks);
    setDisplayData(sortedByMarks);
    // <DisplayData setDisplayData={setDisplayData} />;
  };
  const sortByAttendance = () => {
    const sortedByAttendance = [...StudentData];
    sortedByAttendance.sort((a, b) => b.attendance - a.attendance);
    setDisplayData(sortByAttendance);
    // <DisplayData setDisplayData={setDisplayData} />;
  };

  return (
    <div className="headerBar">
      <div className="headerTopic">Student Data</div>
      <div className="inputOptions">
        <label htmlFor="filter">Search by Name</label>
        <input
          type="text"
          id="filter"
          value={searchKey}
          placeholder="Search..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button onClick={handleSearchChange()}>Search</button>
      </div>
      <div className="inputOptions">
        <label htmlFor="sort">Sort by</label>
        <select
          name=""
          id=""
          value={sortkey}
          onChange={(e) => {
            const Result = e.target.value;
            setSortKey(Result);
            Result === "marks" ? sortByMark() : sortByAttendance();
          }}
        >
          <option value="default">--Select--</option>
          <option value="">Marks</option>
          <option value="">Attendance</option>
        </select>
      </div>
    </div>
  );
};

Header.propTypes = {
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

export default Header;
