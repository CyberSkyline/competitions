/* eslint-disable no-else-return */
import React from 'react';
import marked from 'marked';
import _ from 'lodash';
import { Message, Grid, Header } from 'semantic-ui-react';
import { introMessage } from './constants.js';

marked.setOptions({
  gfm: true,
});

function DismissibleMessage() {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <Message textAlign='center' visible='true' onDismiss={() => setVisible(false)}>
        <Message.Header>
          <Header size='medium' textAlign='center' color='red' style={{ margin: '.5em' }}>What are Cybersecurity Competitions?</Header>
        </Message.Header>
        <Grid stackable doubling columns={4} divided>
          <Grid.Row>
            {_.chain(introMessage).split('\n').map((line) => (
              <Grid.Column textAlign='justified' as='b' dangerouslySetInnerHTML={{ __html: line }} />
            )).value()}
          </Grid.Row>
        </Grid>
      </Message>
    );
  } else {
    return null;
  }
}

export default DismissibleMessage;
