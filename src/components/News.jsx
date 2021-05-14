import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "../News.css";
import { Col, Container, Row } from "react-bootstrap";

function News() {
  return (
    <Container>
      <Row>
        <div className="list_course">
          <div className="follower_header">
            Today’s most viewed courses
            <InfoIcon />
          </div>
          <div>
            <ul>
              <li>The Six Morning Habits of High Performers</li>
              <small>Pete Mockaitis | How to Be Awesome at Your Job</small>
              <li>Daniel Pinks on Motivation</li>
              <small>Daniel Pinks</small>
              <li>Speaking Confidently and Effectively</li>
              <small>Pete Mockaitis | How to Be Awesome at Your Job</small>
              <li className="recommendations">
                {" "}
                View all recommendations
                <ArrowRightAltIcon style={{ backgroundColor: "white" }} />
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default News;
