import React from "react";
import PropTypes from "prop-types";
import "../style.css";

const Header = (props) => {
  return (
    <div className="headerBar">
      <div className="headerTopic">Student Data</div>
      <div className="inputOptions">
        <label htmlFor="filter">Search by Name</label>
        <input type="text" id="filter" />
      </div>
      <div className="inputOptions">
        <label htmlFor="sort">Sort by</label>
        <select name="" id="">
          <option value="">--Select--</option>
          <option value="name">Name</option>
          <option value="">Attendance</option>
        </select>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
