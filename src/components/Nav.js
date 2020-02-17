import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Navigation = ({ dispatch, authedUser, name, avatarURL }) => (
  <nav className="nav">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add" activeClassName="active">
          New Question
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard" activeClassName="active">
          Leader Board
        </NavLink>
      </li>
      {name !== null && (
        <li id="greeting">
          Hi, {name}!
        </li>
      )}
      {authedUser !== null && (<img alt={`avatar of ${authedUser}`} className="avatar-nav" src={avatarURL} />)}
      {authedUser !== null && (
        <li id="logout">
          <NavLink
            onClick={() => dispatch(setAuthedUser(null))}
            to="/login"
            activeClassName="active"
          >
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser,
    name: authedUser ? users[authedUser].name : null,
    avatarURL: authedUser ? users[authedUser].avatarURL : null
  };
};

export default connect(mapStateToProps)(Navigation);
