import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function DocReview({re}) {

    console.log(re);

    const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div>
      <p onClick={toggleShow}  style={{color:'black',border:'1px solid white',borderRadius:'16px',backgroundColor:'lightgreen'}}>Reviews</p>
      
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{re.patient_name}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
        {re.date}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        {re.rating}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        {re.comments}
      </MDBListGroupItem>
    </MDBListGroup>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default DocReview