import React from "react";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";
import AddIcon from "@material-ui/icons/Add";
import AddExperienceModal from "./AddExperienceModal";
import { withRouter } from "react-router";
import { Spinner } from "react-bootstrap";
class Experience extends React.Component {
  state = {
    modalShow: false,
  };

  componentDidMount = async () => {
    this.props.getUserInfo();
    this.props.getUserExperiences();
  };
  render() {
    return (
      <>
        <div className="experience-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ fontSize: "24px" }}>Experience</p>

            {this.props.location.pathname === "/me" && (
              <AddIcon
                key={1}
                onClick={() => this.setState({ modalShow: true })}
                style={{ cursor: "pointer" }}
              />
            )}

            {!this.props.location.pathname === "/user/" && (
              <AddIcon
                key={2}
                onClick={() => this.setState({ modalShow: true })}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {this.props.experiences.length === 0 && (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.props.experiences.length > 0 &&
            this.props.experiences.map((experience) => (
              <>
                <ExperienceItem
                  key={Math.ceil(Math.random() * 99999999999)}
                  editUserExperience={this.props.editUserExperience}
                  experience={experience}
                  deleteUserExperience={this.props.deleteUserExperience}
                />
              </>
            ))}
        </div>
        <AddExperienceModal
          style={{ height: "70vh" }}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          addExperience={this.props.addExperience}
        />
      </>
    );
  }
}

export default withRouter(Experience);
