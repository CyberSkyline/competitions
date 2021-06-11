import React from 'react';
import moment from 'moment';
import { Button, Header, Image, Modal, Grid, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Modalpopup(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Header>
        <Grid textAlign='left' columns={2}>
          <Grid.Column>
            <Grid.Row>
              <h1>{props.header}</h1>
            </Grid.Row>
            <Grid.Row>
              {props.endDate != null ? (<h3>{`${moment(props.startDate).format('MMMM D')} - ${moment(props.endDate).format('MMMM D, YYYY')}`}</h3>) : null}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <Button onClick={() => setOpen(false)}> X </Button>
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={props.logoURL} />
        <Modal.Description style={{ flex: '1' }}>
          <Header />
          {props.longDescription}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column>
            <Container textAlign='left'>
              {' Disclaimer: Links on this site are not hosted by CTF Info'}
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Button as='a' color='blue' href={props.contactInfo} target='_blank'>
              Contact
            </Button>
            <Button as='a' color='red' href={props.regURL} target='_blank'>
              Registration
            </Button>
          </Grid.Column>
        </Grid>
      </Modal.Actions>
    </Modal>
  );
}

Modalpopup.propTypes = {
  trigger: PropTypes.instanceOf(Button),
  header: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  longDescription: PropTypes.instanceOf(Grid),
  logoURL: PropTypes.string,
  regURL: PropTypes.string,
  contactInfo: PropTypes.string,
};

export default Modalpopup;
