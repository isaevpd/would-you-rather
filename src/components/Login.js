import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

const Login = ({ dispatch, users, history, location}) => {
  const [userId, setUser] = useState(Object.keys(users)[0]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setAuthedUser(userId));
    if (location.from) {
      // we were redirected here after trying to access another route
      history.push(location.from);
    }
    else {
      history.push('/')
    }
  };

  const handleChange = e => {
    setUser(e.target.value);
  };

  return (<div className='center'>
    <h3>Sign in page</h3>
    <form onSubmit={handleSubmit}>
      <select name="users" value={userId} onChange={handleChange}>
        {users && Object.values(users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
      <button type='submit'>Sign in</button>
    </form>
  </div>)
};

const mapState = ({ users }) => {
  return { users }
};

export default connect(mapState)(Login)
