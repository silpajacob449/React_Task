import React , {Component} from 'react';
import Chosenvalue from './Chosenvalue';

import { Button, Modal } from "react-bootstrap";

export default class Modalextends extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false
    };
  } 
  render() {
    return (
      <>
      <Chosenvalue ></Chosenvalue>
        <Button variant="info" onClick={() => this.setState({ show: true })}>
          Choose Profile
        </Button>
        <Modal show={this.state.show} animation={true} size="md" className="shadow-lg border" aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header className=" text-white text-center">
            <Modal.Title className="text-center">
              <h5>Delete</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0 border">
            body   
          </Modal.Body>
<Modal.Footer className="py-1 d-flex justify-content-center">
              <div>
                <Button
                  variant="info" onClick={() => this.setState({ show: false })}>Cancel</Button>
              </div>
             
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}


