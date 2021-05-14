import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { Col, Row } from "react-bootstrap";
import "./comments.css";
import Moment from "react-moment";
const SingleComment = ({ comment, deleteComment, userInfo, postId }) => {
  const styleForIcon = {
    height: "15px",
    zIndex: 2,
  };

  return (
    <div className="comment-container">
      <div className="d-flex justify-content-between">
        <Row>
          <Col className="comment">
            <h5 className="comment-username">
              <strong>{userInfo.name + " " + userInfo.surname}</strong>
            </h5>
            <h6 className="text-muted username">@{userInfo.username}</h6>
            <p>{comment.comment}</p>
            <div className="fromNow">
              <Moment fromNow>{comment.updatedAt}</Moment>
            </div>
          </Col>
          <img
            className="commenter-pic"
            height="35"
            width="35"
            src={userInfo.image}
            alt={userInfo._id}
          />
        </Row>

        <ClearIcon
          style={styleForIcon}
          onClick={() => deleteComment(postId, userInfo._id, comment._id)}
        />
      </div>
    </div>
  );
};

export default SingleComment;
