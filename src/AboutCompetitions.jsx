/* eslint-disable no-else-return */
import React from 'react';
import _ from 'lodash';
import { Message, Grid, Header } from 'semantic-ui-react';
import { INTRO_MESSAGE, NICE_URL } from './constants.js';

function AboutCompetitions() {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <Message textAlign='center' visible='true' onDismiss={() => setVisible(false)}>
        <Header size='huge' textAlign='center' color='red' style={{ margin: '.5em' }}>What are Cybersecurity Competitions?</Header>
        <Grid stackable doubling columns={4} divided>
          <Grid.Row>
            {_.chain(INTRO_MESSAGE).split('\n').map((line) => (
              <Grid.Column textAlign='justified' as='b' dangerouslySetInnerHTML={{ __html: line }} />
            )).value()}
          </Grid.Row>
          <Grid.Row centered>
            <a href={NICE_URL} target='_blank' rel='noopener noreferrer'>
              Learn more about from the National Initiative for Cybersecurity Education (NICE)
            </a>
          </Grid.Row>
        </Grid>
      </Message>
    );
  } else {
    return null;
  }
}

export default AboutCompetitions;
