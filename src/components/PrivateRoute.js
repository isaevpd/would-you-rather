import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={(props) => {
    return authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', from: props.location.pathname}} />
  }} />
);

const mapState = ({ authedUser }) => {
  return {authenticated: authedUser !== null}
};

export default connect(mapState)(PrivateRoute)
