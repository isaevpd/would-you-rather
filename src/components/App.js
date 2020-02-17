import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import LoadingBar from 'react-redux-loading';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import QuestionDetail from './QuestionDetail';

const App = ({ loading, dispatch }) => {
  //
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }

  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <BrowserRouter>
      <>
        <div>
          <Nav/>
          <LoadingBar style={{ backgroundColor: 'green', marginTop: 0}}/>
          {loading === true ? null : (
            <Switch>
              <PrivateRoute path='/' exact component={Home} />
              <PrivateRoute path='/add' component={NewQuestion} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute path='/question/:id' component={QuestionDetail} />
              <Route path='/login' component={Login} />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </>
    </BrowserRouter>
  );
};

const mapState = ({ users }) => {
  return { loading: Object.keys(users)[0] === undefined}
};

export default connect(mapState)(App);
