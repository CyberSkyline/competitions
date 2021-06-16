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

function Modalpopup(props) {
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
            <Header as='h1' content={header} />
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Image size='small' src={logoURL} style={{ marginLeft: '1em', marginRight: '1em' }} />
        <Modal.Description>
          {props.endDate !== null ? (
            <Header as='h3' content={`${moment(props.startDate).utc().format('MMMM D')} - ${moment(props.endDate).utc().format('MMMM D, YYYY')}`} style={{ marginTop: 0 }} />
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column>
            <Container textAlign='left'>
              {'Note: Links will redirect to third party website not operated by this page.'}
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
