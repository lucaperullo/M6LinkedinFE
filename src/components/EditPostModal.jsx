import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class EditPostModal extends Component {
  state = {
    postObj: {
      text: this.props.postBody,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editPosts(this.state.postObj, this.props.postId);
    this.props.onHide();
  };
  handleDelete = (e) => {
    e.preventDefault();
    this.props.deletePosts(this.props.postId);
    this.props.onHide();
  };
  render() {
    return (
      <Modal show={this.props.show} {...this.props}>
        <form onSubmit={this.handleSubmit}>
          <Modal.Header>
            <Modal.Title>Edit or delete post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              id="text"
              value={this.state.postObj.text}
              onChange={(e) =>
                this.setState({
                  postObj: {
                    ...this.state.postObj,
                    [e.target.id]: e.target.value,
                  },
                })
              }
              type="textarea"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
