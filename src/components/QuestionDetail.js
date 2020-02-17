import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../actions/questions";
import NotFound from "./NotFound";
import PollResults from "./PollResults";

const QuestionDetail = props => {
  const {
    authedUser,
    fullName,
    avatarURL,
    optionOne,
    optionTwo,
    id,
    dispatch
  } = props;
  let alreadyAnswered = false;
  if (optionOne !== undefined)
    alreadyAnswered =
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser);

  const [answered, setAnswered] = useState(alreadyAnswered);
  const [selected, selectOption] = useState(null);

  // I wonder if there is a better way? has to be done after hooks
  if (optionOne === undefined) {
    return <NotFound />;
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(handleAddQuestionAnswer(id, selected));
    setAnswered(true);
  };
  if (answered) {
    return <PollResults id={id} />;
  }
  return (
    <div className="question-detail">
      <div className="item">
        <div className="item-header">{`${fullName} asks:`}</div>
        <div className="item-body">
          <div className="avatar">
            <img alt={`avatar of ${fullName}`} src={avatarURL} />
          </div>
          <div className='item-content'>
            <h3>Would you rather ...</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="radio"
                name="poll"
                value="optionOne"
                onChange={() => selectOption("optionOne")}
                checked={selected === "optionOne"}
              />{" "}
              {optionOne.text}
              <br />
              <input
                type="radio"
                name="poll"
                value="optionTwo"
                onChange={() => selectOption("optionTwo")}
                checked={selected === "optionTwo"}
              />{" "}
              {optionTwo.text}
              <br />
              <button type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const id = props.match.params.id;
  const question = questions[id];
  const user = question ? users[question.author] : null;
  return {
    authedUser,
    avatarURL: user ? user.avatarURL : null,
    fullName: user ? user.name : null,
    ...question
  };
};

export default connect(mapStateToProps)(QuestionDetail);
