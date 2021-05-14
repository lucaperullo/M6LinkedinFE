import React from "react";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter, Route } from "react-router-dom";
import Me from "./components/Me";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import RegistrationPage from "../src/components/RegistrationPage";
import LoginPage from "../src/components/LoginPage";

class App extends React.Component {
  state = {
    bearer: "",
    data: {},
  };
  getActualUser = async () => {
    try {
      let response = await fetch(
        `https://linkedinnn.herokuapp.com/v1/users/me`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        let myProfile = await response.json();
        this.setState({ data: myProfile });
      }
    } catch (error) {
      console.log(error);
    }
  };
  updateBearer = (hi2) => {
    this.setState({ bearer: hi2 });
    if (this.state.bearer !== "") {
      this.props.history.push("/");
    }
  };
  access = () => {
    this.props.history.push("/feed");
  };
  updateState = (subState) => {
    this.setState({ data: subState });
  };
  componentDidMount() {
    this.getActualUser();
  }

  render() {
    return (
      <>
        {this.props.history.location.pathname !== "/" && (
          <div className="d-flex justify-content-center">
            <Header
            // userInfo={this.state.userInfo}
            />
          </div>
        )}
        <Route
          path="/feed"
          exact
          component={HomePage}
          // userInfo={this.state.userInfo}
        />
        <Route path="/me" render={(routerProps) => <Me {...routerProps} />} />
        <Route
          path="/user/:id"
          render={(routerProps) => <Profile {...routerProps} />}
        />

        <Route
          exact
          path="/register"
          render={(props) => (
            <RegistrationPage
              {...props}
              {...this.state}
              access={this.access}
              setState={this.updateState}
              setState2={this.updateBearer}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => <LoginPage access={this.access} {...props} />}
        />
      </>
    );
  }
}

export default withRouter(App);
