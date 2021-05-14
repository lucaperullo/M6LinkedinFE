import React from "react";
import RandonProfiles from "./RandonProfiles";
import News from "./News";
import { Col, Container, Row } from "react-bootstrap";
import "../Follow.css";
import InfoIcon from "@material-ui/icons/Info";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Advertisement from "./Advertisement";
import Contacts from "./Contacts";

function Follow(props) {
  const RandomAvatarsBill =
    "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg";
  const RandomAvatarsUni =
    "https://media-exp1.licdn.com/dms/image/C4E0BAQFC-wGW2UwMIQ/company-logo_100_100/0/1593590505853?e=1625702400&v=beta&t=SW8ivrZCgnXrnfhn_-n8gSWorkvJNsLIinWhujPmZ9g";
  const RandomAvatarRichard =
    "https://media-exp1.licdn.com/dms/image/C5103AQHOMnmYTD44Dw/profile-displayphoto-shrink_100_100/0/1517043249241?e=1623283200&v=beta&t=C6xfEC725JW9yzna0tz7v0mUG_iaeopFG12eArnNNxU";
  return (
    <Container className="main_box">
      <Row>
        <Col>
          <div className="subtitle_feed">
            Add to your feed
            <InfoIcon />
          </div>
          <RandonProfiles
            name="Bill Gates"
            avatar={RandomAvatarsBill}
            description="Co-chair, Bill y Melinda Gates Foundation"
            /*name={RandomFollowers} avatar={RandomAvatars} description={RandomDescription}*/
          />
          <RandonProfiles
            name="Unilever"
            avatar={RandomAvatarsUni}
            description="Company"
          />
          <RandonProfiles
            name="Richard Branson"
            avatar={RandomAvatarRichard}
            description="Founder at Virgin"
          />

          <div className="footer_feed">
            <span>View all recommendations</span>
            <ArrowRightAltIcon />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <News />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="adv">
            <Advertisement />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Follow;
