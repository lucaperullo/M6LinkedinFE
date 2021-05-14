import React, { Component } from "react";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BallotIcon from "@material-ui/icons/Ballot";
import "./CreatePost.css";
import { Container, Row, Col } from "react-bootstrap";
import CreatePostsWithPhotoModal from "./CreatePostsWithPhotoModal";

export default class CreatePost extends Component {
  state = {
    postObj: {
      text: "",
    },
    file: null,
    modalShow: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPosts(
      this.state.postObj,
      this.state.file,
      this.props.userInfo._id
    );
    this.setState({ postObj: { text: "" } });
  };

  render() {
    return (
      <Container className="start-post-wrapper">
        <Row>
          <Col xs={12} lg={2} className="picture-div">
            {!this.props.userInfo.image ? (
              <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"></img>
            ) : (
              <img
                draggable="false"
                src={this.props.userInfo.image}
                alt="profile-pic"
              />
            )}
          </Col>
          <Col xs={12} lg={10} className="input-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  id="text"
                  placeholder="Start a post"
                  value={this.state.postObj.text}
                  onChange={(e) =>
                    this.setState({
                      postObj: {
                        ...this.state.postObj,
                        [e.target.id]: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div></div>
              <button type="submit">Send</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="input-options-div">
            <div onClick={() => this.setState({ modalShow: true })}>
              <label htmlFor="file" className="mt-2">
                <InputOption Icon={ImageIcon} title={"Photo"} color="#7085F9" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => this.setState({ file: e.target.files[0] })}
                style={{ display: "none" }}
              />
            </div>
            <InputOption Icon={YouTubeIcon} title={"Video"} color="#E7A33E" />
            <InputOption Icon={DateRangeIcon} title={"Event"} color="#C0CBCD" />
            <InputOption
              Icon={BallotIcon}
              title={"Write Article"}
              color="#7FC15E"
            />
          </Col>
        </Row>
        <CreatePostsWithPhotoModal
          file={this.state.file}
          userInfo={this.props.userInfo}
          show={this.state.modalShow}
          addPosts={this.props.addPosts}
          onHide={() => this.setState({ modalShow: false })}
        />
      </Container>
    );
  }
}
