import React from 'react'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
import { Link, BrowserRouter } from 'react-router-dom'

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
              <h3>Deadline</h3>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <Button onClick={() => setOpen(false)}> X </Button>
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={props.logoURL} wrapped />
        <Modal.Description>
          <Header></Header>
          <p> {props.longDescription} </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <BrowserRouter>
          <Link to={{ pathname: "https://google.com" }} target="_blank">
           <Button color='red'>
             Registration
           </Button>
          </Link>
        </BrowserRouter>
      </Modal.Actions>
    </Modal>
  )
}

export default Modalpopup
