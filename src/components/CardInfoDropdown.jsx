import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./CardInfoDropdown.css";

export default function CardInfoDropdown(props) {
  console.log("CardInfo:", props.userInfo);
  return (
    <>
      <Card border="light">
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-around">
              <Avatar className="options_icon" src={props.userInfo.image} />
              {props.userInfo.name + " " + props.userInfo.surname}
            </div>
          </Card.Title>
          <Card.Text className="text-truncate" style={{maxWidth: "150px"}}>{props.userInfo.bio}</Card.Text>
          <div className="text-center">
            <Button className="viewprofile_button_contact" variant="primary">
              <Link to="/me" className="button_link text-muted">View Profile</Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
