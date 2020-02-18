import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';

const NotFound = () => (
  <div className='center'>
    <div>404 Not found</div>
    <Link to='/'>
      <button className='btn home-redirect'  type="button">
        Go to home page
      </button>
    </Link>
  </div>
);

export default NotFound;
