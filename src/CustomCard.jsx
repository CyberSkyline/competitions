import React from 'react';
import { Card, Grid, Image, Button, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Modalpopup from './ModalPopup';

function CustomCard(props) {
  return (
    <Card raised>
      <Grid verticalAlign='middle' textAlign='center' style={{ height: '250px' }}>
        <Grid.Column>
          <Image size='small' src={props.logoURL} wrapped />
        </Grid.Column>
      </Grid>
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>{props.status}</Card.Meta>
        <Grid.Row>
          <Divider hidden fitted style={{ height: '8px' }} />
          <Card.Description className='two-line-truncate'>{props.description}</Card.Description>
        </Grid.Row>
      </Card.Content>
      <Card.Content>
        <Grid.Row textAlign='center'>
          <Modalpopup trigger={<Button> More Information </Button>} {...props} />
        </Grid.Row>
      </Card.Content>
    </Card>
  );
}

CustomCard.propTypes = {
  logoURL: PropTypes.string,
  header: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
};

export default CustomCard;
