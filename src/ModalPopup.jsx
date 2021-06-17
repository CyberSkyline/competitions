/* eslint-disable newline-per-chained-call */
/* eslint-disable react/no-danger */
import React from 'react';
import moment from 'moment';
import marked from 'marked';
import _ from 'lodash';
import { Button, Header, Image, Modal, Grid, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

marked.setOptions({
  gfm: true,
});

function ModalPopup(props) {
  const [open, setOpen] = React.useState(false);
  const { header, logoURL, longDescription, contactInfo, regURL } = props;
  const input = _.chain(longDescription).split('\n').map(_.trimStart).join('\n').value();
  const html = marked(input);
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Header>
        <Grid textAlign='left' columns={2}>
          <Grid.Column>
            <Header content={header} size='huge' />
            {props.endDate !== null ? (<Header size='tiny' content={`${moment(props.startDate).utc().format('MMMM D')} - ${moment(props.endDate).utc().format('MMMM D, YYYY')}`} />) : null}
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Image size='small' src={logoURL} />
        <Modal.Description style={{ margin: '1em' }} dangerouslySetInnerHTML={{ __html: html }} />
      </Modal.Content>
      <Modal.Actions>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column>
            <Container textAlign='left'>
              {'Disclaimer: Links on this site are not hosted by CTF Info'}
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Button as='a' color='blue' href={contactInfo} target='_blank' rel='noopener noreferrer'>
              Contact
            </Button>
            <Button as='a' color='red' href={regURL} target='_blank' rel='noopener noreferrer'>
              Registration
            </Button>
          </Grid.Column>
        </Grid>
      </Modal.Actions>
    </Modal>
  );
}

ModalPopup.propTypes = {
  trigger: PropTypes.instanceOf(Button),
  header: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  longDescription: PropTypes.instanceOf(Grid),
  logoURL: PropTypes.string,
  regURL: PropTypes.string,
  contactInfo: PropTypes.string,
};

export default ModalPopup;
