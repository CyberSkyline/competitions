/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Segment, Grid, Divider, Header, Image, List } from 'semantic-ui-react';
import './themes/style.css';
import DismissibleMessage from './DismissibleMessage';
import * as constants from './constants';
import CurrentEvents from './CurrentEvents';
import PastEvents from './PastEvents';

ReactDOM.render(
  <React.StrictMode>
    <Segment textAlign='center'>
      <Header size='huge'>
        <i className='fas fa-laptop-code' style={{ 'margin-right': '.5em' }} />
        Cyber Competitions Info
      </Header>
    </Segment>

    <div style={{ maxWidth: 1425, margin: 'auto', padding: '2em' }}>
      <DismissibleMessage />

      <Divider horizontal section style={{ padding: '1em' }}>
        <Header size='large'>
          Current Events
        </Header>
      </Divider>

      <CurrentEvents />

      <Divider horizontal section style={{ padding: '1em' }}>
        <Header size='large'>
          Past Events
        </Header>
      </Divider>

      <PastEvents />
    </div>

    <Segment className='Footer'>
      <Grid centered verticalAlign='middle'>
        <Grid.Column floated='left' mobile={5} tablet={3} computer={2} largeScreen={2} widescreen={2}>
          <a href='https://cyberskyline.com' target='_blank' rel='noopener noreferrer'>
            <Image src='/images/cyberskyline.svg' />
          </a>
        </Grid.Column>
        <Grid.Column mobile={11} tablet={12} computer={12} largeScreen={12} widescreen={12}>
          <List horizontal centered divided floated='right'>
            <List.Item>
              <a href='https://github.com/CyberSkyline/competitions/' target='_blank' rel='noopener noreferrer'>Want to add your CTF</a>
            </List.Item>
            <List.Item>
              <span>{`Cyber Skyline ©  ${moment(new Date()).utc().format('YYYY')}`}</span>
            </List.Item>
            <List.Item>
              {`Last updated: ${moment(constants.lastUpdated).utc().format('MMMM D, YYYY')}`}
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
  </React.StrictMode>,
  document.getElementById('root'),
);
