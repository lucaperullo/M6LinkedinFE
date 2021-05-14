import React, { Component } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Me.css";
import Experience from "./Experience";
import MeSidebar from "./MeSidebar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PersonalDashboard from "./PersonalDashboard";
import AddProfilePictureModal from "./AddProfilePictureModal";

export default class Me extends Component {
  state = {
    users: [],
    userInfo: {},
    experiences: [],
    experience: {},
    modalShow: false,
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
        // data = data.reverse();
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
        `https://linkedinnn.herokuapp.com/v1/users/me`,
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
        this.getUserExperiences(data._id);
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserExperiences = async (id) => {
    try {
      let response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userInfo._id}/experiences`,
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
        console.log("EXPERIENCES", this.state.experiences);
      } else {
        console.log("Error while fetching experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  addExperience = async (experience, pic) => {
    try {
      // const formData = new FormData();
      // formData.append();
      const response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userInfo._id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (pic.name !== "") {
          await this.addExperiencePhoto(data._id, pic);
        }

        await this.getUserExperiences();
      } else {
        console.log("Error while adding experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  editUserExperience = async (experience, experienceId) => {
    try {
      const response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userInfo._id}/experiences/${experienceId}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        this.getUserExperiences();
      } else {
        console.log("Error while editing experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteUserExperience = async (experienceId) => {
    try {
      const response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userInfo._id}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        this.getUserExperiences();
      } else {
        console.log("Error while deleting experience");
      }
    } catch (error) {
      console.log(error);
    }
  };

  addExperiencePhoto = async (experienceId, pic) => {
    let formData = new FormData();
    formData.append("image", pic);

    try {
      const response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.state.userInfo._id}/upload/${experienceId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(response);
        console.log(data, "AAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("PICTURE ADDED");
      } else {
        console.log("ERROR WHILE ADDING PICTURE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getUserInfo();
    this.getUsers();
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <Container className="mb-5 fluid p-0">
          <Row>
            <Col xs={12} md={8} className="pr-0">
              <div className="profile-wrapper">
                <div className="header-image-wrapper">
                  <div className="profile-pic-wrapper">
                    <img
                      draggable="false"
                      src={this.state.userInfo.image}
                      alt="profile-pic"
                      width="100px"
                      onClick={() => this.setState({ modalShow: true })}
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

              <AddProfilePictureModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                getUserInfo={this.getUserInfo}
                userInfo={this.state.userInfo}
              />

              <div className="profile-strength-wrapper mt-3">
                <div className="mb-3 profile-strength-header d-flex justify-content-between">
                  <h5 className="font-weight-normal">
                    Profile Strength:{" "}
                    <span className="font-weight-bold">Intermediate</span>
                  </h5>
                  <KeyboardArrowDownIcon
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
                <div>
                  <ProgressBar now={70} />
                </div>
              </div>

              <PersonalDashboard />
              <Experience
                deleteUserExperience={this.deleteUserExperience}
                editUserExperience={this.editUserExperience}
                addExperience={this.addExperience}
                getUserExperiences={this.getUserExperiences}
                getUserInfo={this.getUserInfo}
                users={this.state.users}
                userInfo={this.state.userInfo}
                experiences={this.state.experiences}
              />
            </Col>
            <Col xs={12} md={4} className="pr-0">
              <MeSidebar users={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
