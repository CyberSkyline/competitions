/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {
  Card, Segment, Grid, Image, Divider, Container, Header,
} from 'semantic-ui-react';
import ctfCards from './ctfCards';
import './themes/style.css';
import DismissibleMessage from './DismissibleMessage';
import CustomCard from './CustomCard';

ReactDOM.render(
  <React.StrictMode>
    <Segment textAlign='center'>
      <Image avatar size='mini' src='https://pbs.twimg.com/profile_images/2189766987/ctftime-logo-avatar_400x400.png' />
      <span> CTF Info</span>
    </Segment>
    <Divider hidden />

    <DismissibleMessage />

    <Divider horizontal style={{ 'margin-left': '10em', 'margin-right': '10em' }} section>
      <Header as='h1'>
        Current Events
      </Header>
    </Divider>

    <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically' style={{ 'margin-left': '10em', 'margin-right': '10em' }}>
      {_.chain(ctfCards).filter((element) => (element.endDate > new Date() || element.endDate == null)).map((element) => (
        <CustomCard key={element.header} {...element} />
      )).value()}
    </Card.Group>

    <Divider horizontal style={{ 'margin-left': '10em', 'margin-right': '10em' }} section>
      <Header as='h1'>
        Past Events
      </Header>
    </Divider>

    <Card.Group stackable itemsPerRow={4} doubling centered padded='vertically' style={{ 'margin-left': '10em', 'margin-right': '10em' }}>
      {_.chain(ctfCards).filter((element) => (element.endDate != null && element.endDate <= new Date())).map((element) => (
        <CustomCard key={element.header} {...element} />
      )).value()}
    </Card.Group>

    <Segment className='Footer' textAlign='right'>
      <Container>
        <Grid columns={3}>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column>
            <Grid columns={3} style={{ 'white-space': 'nowrap' }}>
              <Grid.Column>
                <a href='https://github.com/CyberSkyline/competitions/blob/production/src/ctfCards.js' target='_blank' rel='noreferrer'>Want to add your CTF</a>
              </Grid.Column>
              <Grid.Column>
                Cyber Skyline © 2021
              </Grid.Column>
              <Grid.Column>
                Last updated: June 8, 2021
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </React.StrictMode>,
  document.getElementById('root'),
);
