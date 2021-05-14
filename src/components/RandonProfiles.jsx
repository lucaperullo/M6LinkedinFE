import React from "react";
import "../RandonProfiles.css";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from "react-bootstrap";

function RandonProfiles({ name, avatar, description }) {
  return (
    <Container style={{ borderRadius: 50 }}>
      <Row className="main_follower">
        <Col xs={3} className="avatar_background">
          <div className="avatar_image">
            {avatar && <Avatar className="avatar_follower" src={avatar} />}
          </div>
        </Col>
        <Col xs={9} className="full_description">
          <span className="avatar_name">{name}</span>
          <LinkedInIcon />
          <p>{description}</p>
          <Button className="follow_button">Follow</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RandonProfiles;
