import React, { useState } from "react";
import { connect } from "react-redux";
import { switchTab } from "../actions/shared";
import Question from "./QuestionItem";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const QuestionList = ({ questionIds, users, history }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    history.push(`/question/${id}`);
  };

  const getAvatarURL = username => {
    return users[username].avatarURL;
  };

  const getFullName = username => {
    return users[username].name;
  };

  return questionIds.length !== 0 ? (
    <div>
      <ul className="container">
        {questionIds.map(id => (
          <li key={id}>
            <Question
              id={id}
              getFullName={getFullName}
              getAvatarURL={getAvatarURL}
              handleViewPoll={e => handleClick(e, id)}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : <p>No questions found</p>
};

const Home = ({
  answeredIds,
  unansweredIds,
  users,
  history,
  selectedTab,
  dispatch
}) => {
  const [tab, selectTab] = useState(selectedTab);

  const handleSelectTab = tab => {
    selectTab(tab);
    dispatch(switchTab(tab));
  };

  return (
    <div className="page-content">
      <Tabs defaultIndex={tab} onSelect={k => handleSelectTab(k)}>
        <TabList>
          <Tab>Unanswered</Tab>
          <Tab>Answered</Tab>
        </TabList>

        <TabPanel>
          <QuestionList
            history={history}
            users={users}
            questionIds={unansweredIds}
          />
        </TabPanel>
        <TabPanel>
          <QuestionList
            history={history}
            users={users}
            questionIds={answeredIds}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

const _getAnsweredQuestion = (username, questions) => {
  const criteria = ([id, question]) => {
    return (
      question.optionOne.votes.includes(username) ||
      question.optionTwo.votes.includes(username)
    );
  };

  return Object.fromEntries(Object.entries(questions).filter(criteria));
};

const _getUnansweredQuestion = (username, questions) => {
  const criteria = ([id, question]) => {
    return (
      !question.optionOne.votes.includes(username) &&
      !question.optionTwo.votes.includes(username)
    );
  };
  return Object.fromEntries(Object.entries(questions).filter(criteria));
};

function mapStateToProps({ authedUser, questions, users, visual }) {
  const answered = _getAnsweredQuestion(authedUser, questions);
  const unanswered = _getUnansweredQuestion(authedUser, questions);
  return {
    answeredIds: Object.keys(answered).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unansweredIds: Object.keys(unanswered).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    // when user presses back in the browser selected tab is saved
    selectedTab: visual.tab ? visual.tab : 0,
    users
  };
}

export default connect(mapStateToProps)(Home);
