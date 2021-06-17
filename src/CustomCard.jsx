import React from 'react';
import moment from 'moment';
import { Card, Grid, Image, Button, Divider, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalPopup from './ModalPopup';


const { string, instanceOf } = PropTypes;

function CustomCard(props) {
  const { header, logoURL, startDate, endDate } = props;
  return (
    <Card raised>
      <Grid verticalAlign='middle' textAlign='center' style={{ height: 250 }}>
        <Grid.Column>
          <Image size='small' src={logoURL} wrapped />
        </Grid.Column>
      </Grid>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{endDate !== null ? (<Header size='tiny' sub content={`${moment(startDate).utc().format('MMMM D')} - ${moment(endDate).utc().format('MMMM D, YYYY')}`} />) : (<Header size='tiny' sub content={'Check back for Updates'} />)}</Card.Meta>
        <Grid.Row>
          <Divider hidden fitted style={{ height: 8 }} />
          <Card.Description className='two-line-truncate'>{props.description}</Card.Description>
        </Grid.Row>
      </Card.Content>
      <Card.Content>
        <Grid.Row textAlign='center'>
          <ModalPopup trigger={<Button fluid>More Information</Button>} {...props} />
        </Grid.Row>
      </Card.Content>
    </Card>
  );
}

CustomCard.propTypes = {
  logoURL: string,
  header: string,
  description: string,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
};

export default CustomCard;
