import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DocCard from '../DocCard/DocCard'
import { baseUrl } from '../Base_url'


function Main() {


  
  const [allData,setallData]=useState([])

  const fetchData=async()=>{
    const {data} = await axios.get(`${baseUrl}/doctors`)
    console.log(data);
    setallData(data)
  }
  console.log(allData);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
        <Row>
          {
            allData.map((item)=>(
              <Col>
                <DocCard doctors={item}/>
              </Col>
              
              
            ))
          }
        </Row>
    </>
  )
}

export default Main