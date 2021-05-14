import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./AddComment.css";
import SingleComment from "./SingleComment";

const AddComment = ({ userInfo, postId, comments, getPosts }) => {
  const [commentObj, setCommentObj] = useState({
    comment: "",
  });

  const deleteComment = async (postId, userId, commentId) => {
    const response = await fetch(
      `https://linkedinnn.herokuapp.com/v1/posts/${postId}/user/${userId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.ok) {
      console.log("Comment deleted");
      await getPosts();
    } else {
      console.log("Error while deleting comment");
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    console.log(commentObj);
    const response = await fetch(
      `https://linkedinnn.herokuapp.com/v1/posts/${postId}/user/${userInfo._id}/comment`,
      {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setCommentObj({ comment: "" });
      console.log(data);
      await getPosts();
    } else {
      console.log("Error while adding comment");
    }
  };

  return (
    <>
      <form onSubmit={postComment}>
        <div className="add-comment-wrapper">
          <img
            style={{ borderRadius: "50%" }}
            height="45"
            width="45"
            draggable="false"
            src={userInfo.image}
            alt="profile-pic"
          />

          <input
            type="text"
            id="comment"
            placeholder="Add a comment..."
            value={commentObj.text}
            onChange={(e) => {
              const textValue = e.target.value;
              setCommentObj((prevState) => {
                return { ...prevState, comment: textValue };
              });
            }}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {
        <ListGroup className="mt-2">
          {comments &&
            comments.map((comment) => (
              <SingleComment
                key={comment._id}
                comment={comment}
                userInfo={userInfo}
                postId={postId}
                postComment={postComment}
                deleteComment={deleteComment}
              />
            ))}
        </ListGroup>
      }
    </>
  );
};

export default AddComment;
