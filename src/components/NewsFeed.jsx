import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CreatePost from "./CreatePost";
import Post from "./Post";
import ContentLoader, { Facebook } from "react-content-loader";

export default class NewsFeed extends Component {
  MyFacebookLoader = () => <Facebook />;
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <CreatePost
              userInfo={this.props.userInfo}
              addPosts={this.props.addPosts}
            />
            <div
              className="my-2 mx-auto"
              style={{
                width: "90%",
                height: "0",
                border: "1px solid rgba(211, 211, 211, 0.452)",
              }}
            ></div>
            {this.props.posts.length === 0 && (
              <div className="d-flex justify-content-center">
                <Container>
                  <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                </Container>
                {/* <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner> */}
              </div>
            )}
            {this.props.posts.length > 0 &&
              this.props.posts
                .slice(0, 30)
                .map((post) => (
                  <Post
                    post={post}
                    createdAt={post.createdAt}
                    comments={post.comments}
                    userInfo={this.props.userInfo}
                    key={post._id}
                    postId={post._id}
                    name={post.userId.name}
                    surname={post.userId.surname}
                    postUserId={post.userId._id}
                    description={post.userId.title}
                    postBody={post.text}
                    profilePic={post.userId.image}
                    postImage={post.img}
                    getPosts={this.props.getPosts}
                    editPosts={this.props.editPosts}
                    deletePosts={this.props.deletePosts}
                  />
                ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
