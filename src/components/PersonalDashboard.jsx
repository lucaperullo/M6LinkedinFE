import React from "react";
import { Col } from "react-bootstrap";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import "./PersonalDashboard.css";

const PersonalDashboard = () => {
  return (
    <div className="personal-dashboard-wrapper my-3">
      <div className="personal-dashboard-header">
        <h5 className="font-weight-normal">Your Dashboard</h5>
        <p>
          <i className="font-weight-light">Private to you</i>
        </p>
      </div>

      <div className="personal-dashboard-stats-wrapper">
        <Col xs={4}>
          <div className="stat-div stats-div">
            <h4 className="font-weight-light text-primary">4</h4>
            <p>Who viewed your profile</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stat-div stats-div">
            <h4 className="font-weight-light text-primary">80</h4>
            <p>Post views</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stat-div">
            <h4 className="font-weight-light text-primary">9</h4>
            <p>Search appearances</p>
          </div>
        </Col>
      </div>

      <div className="personal-dashboard-my-items-wrapper mt-4">
        <div>
          <TurnedInIcon style={{ backgroundColor: "transparent" }} />
        </div>
        <div>
          <h6>My items</h6>
          <small className="text-muted">
            Keep track of your jobs, courses and articles
          </small>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
