import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/new' activeClassName='active'>New Tweet</NavLink>
      </li>
    </ul>
  </Nav>
);
