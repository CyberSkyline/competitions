import React from 'react'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'

const moment = require('moment');

function Modalpopup(props) {
  const [open, setOpen] = React.useState(false)

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
              <h3> {moment(props.ctfStartDate).format('MMMM D')} - {moment(props.ctfEndDate).format('MMMM D, YYYY')}</h3>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <Button onClick={() => setOpen(false)}> X </Button>
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={props.logoURL} />
        <Modal.Description style={{'flex': '1'}}>
          <Header></Header>
           {props.longDescription}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
          <Button as='a' color='blue' href={props.contactInfo} target='_blank'>
             Contact
           </Button>
           <Button as='a' color='red' href={props.regURL} target='_blank'>
             Registration
           </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Modalpopup
