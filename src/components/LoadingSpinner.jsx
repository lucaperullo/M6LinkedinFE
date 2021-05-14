import React from "react-bootstrap";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div class="app-container">
      <div class="logo-img">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="spinner"
        />
      </div>
      <div class="loader"></div>
    </div>
  );
};
export default LoadingSpinner;
