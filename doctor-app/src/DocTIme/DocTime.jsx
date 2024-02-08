import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function DocTime({op}) {
  console.log(op);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <p variant="primary" style={{color:'black',border:'1px solid white',borderRadius:'16px',backgroundColor:'lightgreen'}} onClick={handleShow}>
      AVAILABLE DAYS
    </p>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Available days</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
    <ListGroup.Item>{op}</ListGroup.Item>

    
  </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default DocTime