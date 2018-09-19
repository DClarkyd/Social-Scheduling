import * as React from "react";
import { Link } from "react-router-dom";
import { IState } from "../../reducers";
import { connect } from "react-redux";
import { logoutCleanUp } from "../../utils";
import * as signInActions from '../../actions/sign-in/sign-in.actions';

class AppNav extends React.Component<any, any> {

  public onClick = (e: any) => {
    this.props.setLoginUser({});
    this.props.updateUsername('');
    this.props.updatePassword('');
    logoutCleanUp();
  }

  public componentWillMount(){
    const userId = localStorage.getItem('userId') || null;
    console.log(userId);
  }

  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
        <div className="container">
          <a className="navbar-brand">Social Planit</a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
          <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            { this.props.signIn.signinUser.id || localStorage.getItem("userId") ?
              (
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <Link to="/calendar" className="nav-link">
                      Calendar
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/make-event" className="nav-link">
                      Make Event
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/events/invitations" className="nav-link">
                      View Event invitations
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/set-interests" className="nav-link">
                      Set Interests
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/add-friends" className="nav-link">
                      Add Friends
                </Link>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      Friends
                </a>
                    <ul className="dropdown-menu">
                      <li>View Friends</li>
                      <li>View Friend Requests</li>
                      <li className="nav-item">
                        <Link to="/add-friends" className="nav-link">
                          Add Friend
                    </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      Profile
                </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                          View Profile
                    </Link>
                      </li>
                      <li>
                        <Link to="/edit-profile" className="nav-link">
                          Edit Profile
                    </Link>
                      </li>
                      <li>Edit Interests</li>
                    </ul>
                  </li>
                  <li className="nav-item" onClick={this.onClick}>
                    <Link to="/sign-in" className="nav-link">
                      Sign Out
                </Link>
                  </li>
                </ul>
              )
              :
              (
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    {localStorage.getItem("userId") ? JSON.parse(localStorage.getItem("userId") || "{}") : null}
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
              </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sign-in" className="nav-link">
                      Sign In
              </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
              </Link>
                  </li>
                </ul>)
            }

          </div>
        </div>
      </nav>
    )
  }
};

const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = {

  setLoginUser: signInActions.setLoginUser,
  updateError: signInActions.updateError,
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername

}
export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
