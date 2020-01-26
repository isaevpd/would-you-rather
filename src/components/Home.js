import React, {useState} from 'react';
import {Container, ListGroup, ListGroupItem, Tab, Tabs} from 'react-bootstrap';
import { connect } from "react-redux";
import Question from "./Question";

const Home = ({ questionIds }) => {
  const [key, setKey] = useState('answered');

  console.log(key);

  return (
    <Container>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey='unanswered' title="Unanswered">
          unanswered
        </Tab>
        <Tab eventKey='answered' title="Answered">
          <ListGroup>
            {questionIds.map(id => <ListGroupItem key={id}><Question id={id}/></ListGroupItem>)}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Home);
