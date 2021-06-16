/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import moment from 'moment';
import { Card, Segment, Grid, Divider, Header, Image, List } from 'semantic-ui-react';

import './themes/style.css';
import competitions from './competitions';
import AboutCompetitions from './AboutCompetitions';
import CustomCard from './CustomCard';
import { LAST_UPDATED } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <Segment textAlign='center'>
      <Header size='huge'>
        <i className='fas fa-laptop-code' style={{ 'margin-right': '.5em' }} />
        Cyber Competitions Info
      </Header>
    </Segment>

    <div style={{ maxWidth: 1425, margin: 'auto', padding: '2em' }}>
      <AboutCompetitions />

      <Divider horizontal section style={{ 'margin-top': '1em' }}>
        <Header size='large'>
          Current Events
        </Header>
      </Divider>

      <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically'>
        {_.chain(competitions).sortBy('startDate').filter((element) => (element.endDate > new Date() || element.endDate === null)).map((element) => (
          <CustomCard key={element.header} {...element} />
        ))
          .value()}
      </Card.Group>

      <Divider horizontal section style={{ 'margin-top': '4em' }}>
        <Header size='large'>
          Past Events
        </Header>
      </Divider>

      <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically'>
        {_.chain(competitions).orderBy((competition) => moment(competition.startDate), 'desc').filter((element) => (element.endDate !== null && element.endDate <= new Date())).map((element) => (
          <CustomCard key={element.header} {...element} />
        ))
          .value()}
      </Card.Group>
    </div>

    <Segment className='Footer'>
      <Grid centered verticalAlign='middle'>
        <Grid.Column width={5}>
          <a href='https://cyberskyline.com' target='_blank' rel='noreferrer noopener'>
            <Image src='/images/cyberskyline.svg' style={{ maxHeight: 20, maxWidth: 150, width: 'auto' }} />
          </a>
        </Grid.Column>
        <Grid.Column width={11} textAlign='right'>
          <List horizontal centered divided>
            <List.Item>
              <a href='https://github.com/CyberSkyline/competitions#readme' target='_blank' rel='noreferrer noopener'>Want to add your event?</a>
            </List.Item>
            <List.Item>
              <span>{`Cyber Skyline ©  ${moment(new Date()).utc().format('YYYY')}`}</span>
            </List.Item>
            <List.Item>
              {`Last updated: ${moment(LAST_UPDATED).utc().format('MMMM D, YYYY')}`}
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
  </React.StrictMode>,
  document.getElementById('root'),
);
