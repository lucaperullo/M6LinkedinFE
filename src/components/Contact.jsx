import React, { Component } from "react";
import { Container, Image, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <Container fluid className="contact-wrapper">
        <Row>
          <div className="image-wrapper">
            <Image
              src={this.props.user.image}
              alt="img"
              onClick={() =>
                this.props.history.push(`/user/${this.props.user._id}`)
              }
            />
          </div>
          <div className="name-wrapper">
            <h6 className="p-0 m-1">{this.props.user.name}</h6>
            <p className="p-0 m-1" style={{ color: "gray" }}>
              {this.props.user.title && this.props.user.title.slice(0, 30)}
            </p>
            <div className="button-wrapper">
              <button
                className="follow_button_contact"
                onClick={() =>
                  this.props.history.push(`/user/${this.props.user._id}`)
                }
              >
                Connect
              </button>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Contact);
