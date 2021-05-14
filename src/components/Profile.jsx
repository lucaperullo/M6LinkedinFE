import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Me.css";
import Experience from "./Experience";
import MeSidebar from "./MeSidebar";

export default class Me extends Component {
  state = {
    users: [],
    userInfo: {},
    experiences: [],
    experience: {},
    userId: this.props.match.params.id,
  };

  getUsers = async () => {
    try {
      let response = await fetch(`https://linkedinnn.herokuapp.com/v1/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ users: data.slice(data.length - 50) });
      } else {
        console.log("Error while fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserInfo = async () => {
    try {
      let response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ userInfo: data });
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserExperiences = async () => {
    try {
      let response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userId}/experiences`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ experiences: data });
      } else {
        console.log("Error while fetching experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ userId: this.props.match.params.id });
      setTimeout(() => {
        this.getUserInfo();
        this.getUserExperiences();
      }, 100);
    }
  };

  componentDidMount = () => {
    this.getUsers();
  };
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <Container className="mb-5">
          <Row>
            <Col xs={8}>
              <div className="profile-wrapper">
                <div className="header-image-wrapper">
                  <div className="profile-pic-wrapper">
                    <img
                      draggable="false"
                      src={this.state.userInfo.image}
                      alt="profile-pic"
                    />
                  </div>
                </div>
                <div className="personal-information-div">
                  <div className="name-wrapper">
                    <h4>
                      {this.state.userInfo.name} {this.state.userInfo.surname}
                    </h4>
                    <p>{this.state.userInfo.bio}</p>
                  </div>
                  <div className="job-description-wrapper">
                    <p>{this.state.userInfo.title}</p>
                  </div>
                  <div className="location-wrapper">
                    {this.state.userInfo.area}
                  </div>
                  <div className="profile-buttons mt-3  d-flex">
                    <Button
                      variant="primary"
                      className="text-light mr-2"
                      style={{ borderRadius: "20px" }}
                    >
                      Open to{" "}
                    </Button>
                    <Button
                      variant={"light"}
                      className="text-muted mr-2"
                      style={{ borderRadius: "20px" }}
                    >
                      Add profile section
                    </Button>
                    <Button
                      variant={"light"}
                      className="text-muted"
                      style={{ borderRadius: "20px" }}
                    >
                      More...
                    </Button>
                  </div>
                </div>
              </div>

              {this.state.experiences && (
                <Experience
                  getUserExperiences={this.getUserExperiences}
                  getUserInfo={this.getUserInfo}
                  users={this.state.users}
                  userInfo={this.state.userInfo}
                  experiences={this.state.experiences}
                />
              )}
            </Col>
            <Col xs={4}>
              <MeSidebar users={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
