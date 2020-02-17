import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {handleAddQuestion} from '../actions/questions';

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;

    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState({
      text: '',
      toHome: true
    });
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='page-content'>
        <h4 className='center'>New question</h4>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <input
            maxLength={100}
            name='optionOne'
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Option one"
            value={optionOne}
          />
          <input
            maxLength={100}
            name='optionTwo'
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Option two"
            value={optionTwo}
          />
          <button className="btn" type='submit' disabled={!optionOne || !optionTwo}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
