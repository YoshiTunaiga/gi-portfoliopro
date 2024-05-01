// import React from 'react'
import PropTypes from "prop-types";

const ResumePage = ({ id = "" }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        color: "#FFFFFF",
        // border: "1px solid red",
        backgroundColor: "#000000",
        justifyContent: "center",
      }}>
      ResumePage
    </div>
  );
};

ResumePage.propTypes = {
  id: PropTypes.string,
};

export default ResumePage;
