import React, { useState } from "react";
import "./Post.css";
import ShowMoreText from "react-show-more-text";
import InputOption from "./InputOption";
import AddComment from "./AddComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditPostModal from "./EditPostModal";
import { withRouter } from "react-router";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { SlackSelector } from "@charkour/react-reactions";
import Moment from "react-moment";

const Post = ({
  post,
  createdAt,
  userInfo,
  postId,
  name,
  surname,
  postUserId,
  description,
  postBody,
  profilePic,
  postImage,
  editPosts,
  deletePosts,
  history,
  comments,
  getPosts,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [commentsShow, setCommentsShow] = useState(false);
  const executeOnClick = () => {
    setExpanded(true);
  };
  const numberOfReactions =
    post.likes.length +
    post.insightfuls.length +
    post.loves.length +
    post.supports.length +
    post.celebrates.length;
  const [reactionsShow, setReactionsShow] = useState(false);
  const postLike = async (e) => {
    const reaction = e;
    try {
      const res = await fetch(
        `https://linkedinnn.herokuapp.com/v1/posts/${postId}/user/${userInfo._id}/${reaction}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setReactionsShow(!reactionsShow);
      if (res.ok) {
        await getPosts();
      } else {
        console.log("error while doing");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="post-wrapper">
        <div className="post-header-wrapper d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div className="profilePic-wrapper">
              <img
                draggable="false"
                draggable="false"
                src={profilePic}
                alt="profile-pic"
                style={{ borderRadius: "50%" }}
                height="55"
                width="55"
                onClick={() => history.push(`/user/${postUserId}`)}
              />
            </div>
            <div className="name-and-description-wrapper">
              <h5>
                <strong>
                  {name} {surname}
                </strong>
              </h5>

              <p style={{ marginTop: "-7px" }}>{description}</p>

              <Moment className="momentpos" fromNow>
                {createdAt}
              </Moment>
            </div>
          </div>
          <div>
            {userInfo._id === postUserId && (
              <MoreHorizIcon
                onClick={() => setModalShow(true)}
                postId={postId}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        <div className="post-body">
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            onClick={executeOnClick}
            expanded={false}
            width={500}
          >
            {postBody}
          </ShowMoreText>
        </div>
        <div className="postImage-wrapper">
          {postImage && (
            <img
              draggable="false"
              draggable="false"
              src={postImage}
              alt="post-img"
            />
          )}
        </div>
        <div className="likes-wrapper" style={{ display: "flex" }}>
          <div>
            {post.likes && post.likes.length > 0 && (
              <img
                draggable="false"
                className="like"
                src="https://static-exp1.licdn.com/sc/h/36xg5gxpnrq56ebbj1wla5x2n"
                alt="like"
              />
            )}
          </div>
          <div>
            {post.celebrates && post.celebrates.length > 0 && (
              <img
                draggable="false"
                className="celebrate"
                src="https://static-exp1.licdn.com/sc/h/1zk00q5n4o055s08tjpy4rswf"
                alt="celebrate"
              />
            )}
          </div>
          <div>
            {post.supports && post.supports.length > 0 && (
              <img
                draggable="false"
                className="support"
                src="https://static-exp1.licdn.com/sc/h/6xvr3hrj4c24dak8r7z64pgj3"
                alt="support"
              />
            )}
          </div>
          <div>
            {post.loves && post.loves.length > 0 && (
              <img
                draggable="false"
                className="love"
                src="https://static-exp1.licdn.com/sc/h/7rghal44zenlhabcjrr4ow7gk"
                alt="love"
              />
            )}
          </div>
          <div>
            {post.insightfuls && post.insightfuls.length > 0 && (
              <img
                draggable="false"
                className="insightful"
                src="https://static-exp1.licdn.com/sc/h/9wjxk9w5wguhpev3dm13672dq"
                alt="inisghtful"
              />
            )}
          </div>
          <div>
            {post.curiouss && post.curiouss.length > 0 && (
              <img
                draggable="false"
                className="curious"
                src="https://static-exp1.licdn.com/sc/h/3tn3hb1r3nls9c4ddwbg2pymr"
                alt="curious"
              />
            )}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <p className="who-liked">
              {numberOfReactions > 0 ? `${numberOfReactions} reactions` : null}
            </p>
          </div>
        </div>
        <div class="reactions-numerator"></div>
        <div className="reactions-wrapper container-fluid my-2">
          <div className="row">
            <div className="col-3 ">
              <div className="newdiv">
                {reactionsShow && (
                  <div className="sel">
                    <ReactionBarSelector
                      iconSize="20px"
                      reactions={[
                        {
                          label: "like",

                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/36xg5gxpnrq56ebbj1wla5x2n"
                              alt="like-icon"
                            />
                          ),
                        },
                        {
                          label: "celebrate",
                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/1zk00q5n4o055s08tjpy4rswf"
                              alt="insightful-icon"
                            />
                          ),
                        },
                        {
                          label: "support",
                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/6xvr3hrj4c24dak8r7z64pgj3"
                              alt="celebrate-icon"
                            />
                          ),
                        },
                        {
                          label: "love",
                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/7rghal44zenlhabcjrr4ow7gk"
                              alt="love-icon"
                            />
                          ),
                        },
                        {
                          label: "insightful",
                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/9wjxk9w5wguhpev3dm13672dq"
                              alt="celebrate-icon"
                            />
                          ),
                        },

                        {
                          label: "curious",
                          node: (
                            <img
                              draggable="false"
                              src="https://static-exp1.licdn.com/sc/h/3tn3hb1r3nls9c4ddwbg2pymr"
                              alt="like-icon"
                            />
                          ),
                        },
                      ]}
                      onSelect={postLike}
                    />
                  </div>
                )}
                <div onClick={() => setReactionsShow(!reactionsShow)}>
                  {(() => {
                    if (
                      post.likes &&
                      post.curiouss &&
                      post.insightfuls &&
                      post.celebrates &&
                      post.loves &&
                      post.supports &&
                      !post.likes.includes(userInfo._id) &&
                      !post.curiouss.includes(userInfo._id) &&
                      !post.celebrates.includes(userInfo._id) &&
                      !post.insightfuls.includes(userInfo._id) &&
                      !post.loves.includes(userInfo._id) &&
                      !post.supports.includes(userInfo._id)
                    ) {
                      return (
                        <img
                          draggable="false"
                          height="20"
                          src="https://media.discordapp.net/attachments/841212509343580162/842580036922245180/icons8-facebook-like-64.png"
                          alt="likeico"
                        />
                      );
                    } else {
                      return (
                        <img
                          draggable="false"
                          height="20"
                          src="https://media.discordapp.net/attachments/819321346629566514/842714258127323146/icons8-facebook-like-64_1.png"
                          alt="likeico"
                        />
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
            <div
              className="col-3"
              onClick={() => setCommentsShow(!commentsShow)}
              style={{ cursor: "pointer" }}
            >
              <img
                draggable="false"
                height="20"
                src="https://cdn.discordapp.com/attachments/819321346629566514/842693332139638784/icons8-chat-message-100.png"
                alt="likeico"
              />
            </div>
            <div className="col-3 " style={{ cursor: "pointer" }}>
              <img
                draggable="false"
                height="20"
                src="https://cdn.discordapp.com/attachments/819321346629566514/842693345644904448/icons8-share-80.png"
                alt="likeico"
              />
            </div>
            <div className="col-3 ">
              <img
                draggable="false"
                height="20"
                src="https://cdn.discordapp.com/attachments/819321346629566514/842693369247563796/icons8-email-send-80.png"
                alt="likeico"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        {commentsShow && (
          <AddComment
            userInfo={userInfo}
            postId={postId}
            comments={comments}
            getPosts={getPosts}
          />
        )}
      </div>
      <EditPostModal
        postId={postId}
        postBody={postBody}
        show={modalShow}
        onHide={() => setModalShow(false)}
        editPosts={editPosts}
        deletePosts={deletePosts}
      />
    </>
  );
};

export default withRouter(Post);
