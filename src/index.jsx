/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import moment from 'moment';
import { Card, Segment, Grid, Divider, Header, Image, List } from 'semantic-ui-react';
import competitions from './competitionData';
import './themes/style.css';
import DismissibleMessage from './DismissibleMessage';
import CustomCard from './CustomCard';
import * as constants from './constants';

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
        <Grid.Column floated='left' mobile={5} tablet={3} computer={2} largeScreen={2} widescreen={2}>
          <Image src='/images/cyberskyline.svg' />
        </Grid.Column>
        <Grid.Column mobile={11} tablet={12} computer={12} largeScreen={12} widescreen={12}>
          <List horizontal centered divided floated='right'>
            <List.Item>
              <a href='https://github.com/CyberSkyline/competitions/' target='_blank' rel='noreferrer'>Want to add your CTF</a>
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
