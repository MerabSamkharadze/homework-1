// components/Loader.js
import React from "react";
import "./Loader.css"; // Import the CSS for styling

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <h1>LOADING</h1>
    </div>
  );
};

export default Loader;
