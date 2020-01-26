import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {handleAddQuestion} from '../actions/questions';

class NewQuestion extends React.Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({
      text
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;

    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState({
      text: '',
      toHome: true
    });
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className="center">New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <input
            className="textarea"
            maxLength={100}
            onChange={this.handleChange}
            placeholder="Option one"
            value={optionOneText}
          />

          <button className="btn" type='submit' disabled={!optionOneText || !optionTwoText}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
