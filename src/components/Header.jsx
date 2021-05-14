import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/SmsRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
function Header() {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    try {
      let response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/me`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        setUserInfo(data);
        console.log(data);
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Container fluid className="main_header">
      <Row className="header">
        <Col className="header_left">
          <div className="search">
            <Link to="/feed">
              <img
                draggable="false"
                src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
              />
            </Link>
            <SearchIcon style={{ backgroundColor: "#eef3f8" }} />
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/me">
            <div id="small_icon">
              <PersonIcon />
            </div>
          </Link>
          <div className="header_right">
            <Link to="/feed">
              <HeaderOption Icon={HomeIcon} title="Home" />
            </Link>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <div className="border-right d-flex ">
              <HeaderOption
                userInfo={userInfo}
                avatar={userInfo.image}
                title="Me"
              />
            </div>
            <HeaderOption
              changing
              className="border"
              Icon={ViewModuleIcon}
              title="Work"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
