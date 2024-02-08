import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Base_url';
import axios, { all } from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import DocTime from '../DocTIme/DocTime';
import DocReview from '../Doc-review/DocReview';

function ViewDoc() {

  const {id} = useParams()
  console.log(id);

  const [allDoc,setAllDoc]=useState()

  const fetchAllData = async()=>{
    const {data} = await axios.get(`${baseUrl}/doctors/${id}`)
    console.log(data);
    setAllDoc(data)
  }

  console.log(allDoc);

  useEffect(()=>{
    fetchAllData()
  },[])


  return (
    <>
    {
      allDoc?
      <Row>
        
          <Col >
          <Image fluid style={{height:'700px',width:'800px', margin:'20px',padding:'0px',border:'5px solid white'}} src={`${allDoc.image_url}`}/>
          </Col>

          <Col style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3'
      >
        {allDoc.name}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.specialty}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.hospital}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.phone}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.email}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        <DocTime op={allDoc.available_days}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        {allDoc.available_hours}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        <DocReview re={allDoc.reviews}/>
      </MDBListGroupItem>
    </MDBListGroup>
          </Col>
        
      </Row>: <p>no data</p>
    }
    </>
  )
}

export default ViewDoc