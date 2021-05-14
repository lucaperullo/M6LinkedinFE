import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
export default class AddProfilePictureModal extends Component {
  state = {
    file: null,
  };

  handleInput = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  uploadProfilePic = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("img", this.state.file);

    try {
      const response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/${this.props.userInfo._id}/upload`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        toast.success("Profile pic added");
        this.props.getUserInfo();
        this.props.onHide();
      } else {
        toast.error("Error while adding profile pic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: "",
            style: {
              margin: "40px",
              background: "#363636",
              color: "#fff",
              zIndex: 1,
            },
            duration: 5000,
            // Default options for specific types
          }}
        />
        <Modal {...this.props}>
          <form onSubmit={this.uploadProfilePic}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">
                Change profile picture
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-center">
                <input type="file" onChange={(e) => this.handleInput(e)} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Upload
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}
