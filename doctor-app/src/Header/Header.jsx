import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://www.shutterstock.com/shutterstock/photos/2308557423/display_1500/stock-vector-doctor-holding-a-clipboard-young-cartoon-doctor-with-vector-illustration-medical-concept-2308557423.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
            DoctorHub
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header