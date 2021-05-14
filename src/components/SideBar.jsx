import "../css/SideBar.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router";
import "./CardInfoDropdown.css"
const SideBar = (props) => {
  return (
    <>
      <div id="profileWrapper" className="flex-column align-items-center">
        <div className="card mb-1">
          <div className="imageWrapper">
            <div id="cardTop"></div>
            <div id="idImage">
              {!props.userInfo.image ? (
                <img
                  src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
                  alt="loader"
                />
              ) : (
                <img
                  draggable="false"
                  src={props.userInfo.image}
                  alt="profile-pic"
                  onClick={() => props.history.push("/me")}
                />
              )}
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <p>Welcome, {props.userInfo.name}!</p>
              <a href="#!">Add a photo</a>
            </div>
          </div>
          <div id="network" className="mx-2">
            <div className="d-flex justify-content-between">
              <p>Connections</p>
              <p>25</p>
            </div>
            <p>Grow your network</p>
          </div>
          <div id="premium" className="mx-2">
            <p className="my-1">Access exclusive tools & insights</p>
            <p className="my-1">
              <span className="my-2" id="premiumIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
              </span>
              Reactivate Premium
            </p>
          </div>
          <p className="mx-2">
            <span>
              <TurnedInIcon />
            </span>
            My items
          </p>
        </div>
        <div className="links">
          <div>
            <li>Groups</li>
            <div className="d-flex justify-content-between">
              <li>Events</li>
              <span>
                <AddIcon id="bookmark" className="mx-0" />
              </span>
            </div>
            <li>Followed Hashtags</li>
          </div>
          <div>
            <p>Discover more</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(SideBar);
