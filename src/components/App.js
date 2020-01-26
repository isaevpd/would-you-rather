import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import {Navigation} from './Nav';

const App = ({ dispatch }) => {
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
        <Navigation/>
        <Home />
      </>
    </BrowserRouter>
  );
};

export default connect()(App);
