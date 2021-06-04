import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Header, Segment, Grid, Image } from 'semantic-ui-react';
import Modalpopup from './ModalPopup';

const _ = require("lodash");

const ctfCards = [
  {
    header: 'National Cyber League',
    description: 'The National Cyber League (NCL) is the most inclusive, performance-based, learning-centered collegiate cybersecurity competition today!',
    status: 'Registration opens August 23',
    longDescription: 'Longer Description',
    logoURL: 'https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng',
    regURL: 'http://google.com'
  },
  {
    header: 'Example CTF #2',
    description: 'Inormation about the CTF',
    status: 'CLOSED',
    longDescription: 'Longer Description',
    logoURL: 'https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng',
    regURL: ''
  },
  {
    header: 'Example CTF #3',
    description: 'Inormation about the CTF',
    status: 'OPEN',
    longDescription: 'Longer Description',
    logoURL: 'https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng',
    regURL: ''
  },
  {
    header: 'Example CTF #4',
    description: 'Inormation about the CTF',
    status: 'OPEN',
    longDescription: 'Longer Description',
    logoURL: 'https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng',
    regURL: ''
  }
]

ReactDOM.render(
  <React.StrictMode>
    <Segment>
      <Header></Header>
      <Header as='h1' color='red' textAlign='center'> CTF Info </Header>
    </Segment>
    <Card.Group padded='vertically'>
      {_.map(ctfCards, (element) => {
        return <Card key={element.header}>
        <Grid.Column textAlign="center">
          <Image size='small' src='https://images.squarespace-cdn.com/content/5e13a4b584a68c775e362068/1607517723861-XBVA0ONKL21ZROH9C44C/NCL+Powered+By+Cyber+Skyline+Monotone+Logo+copy.png?content-type=image%2Fpng' wrapped />
        </Grid.Column>
        <Card.Content>
          <Card.Header>{element.header}</Card.Header>
          <Card.Meta >{element.status}</Card.Meta>
          <Card.Description>{element.description}</Card.Description>
          <Grid.Column textAlign='center'>
            <Modalpopup trigger={<Button> More Information </Button>} {...element} />
          </Grid.Column>
        </Card.Content>
      </Card>
      })}
    </Card.Group>
  </React.StrictMode>,
  document.getElementById('root')
);
