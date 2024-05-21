'use client'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { useState,useEffect } from 'react'


function Groups() {
 const [department, setdepartment] =useState(
 {
 name : '',
 }
 );
  function handleclick() {
    let mes=JSON.stringify(localStorage.getItem('access_token'))
    let mak =jwtDecode(mes)
        
   axios.post('http://127.0.0.1:8000/api/join/',{
    member : mak.user_id,
    department : department.name,
    
  
    name :mak.name[0] ,
    group :mak.groupss[0] ,
   
    
   },
   {
    headers: {
      
      'Authorization' : 'Bearer ' + String(localStorage.getItem('access_token')?localStorage.getItem('access_token'):null),

    }
  }).then((res)=>{
    console.log(res.status)
   }).catch(function (error) {
    if (error.response) {
      console.log(error.response);
      updateToken()

  
      
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  })
  }
  const updateToken = async ()=>{
    axios.post('http://localhost:8000/api/token/refresh/',{
    refresh: localStorage.getItem('refresh_token')
  }).then((res)=>{
    console.log('ok')
      localStorage.removeItem('refresh_token')
   localStorage.removeItem('access_token')
   localStorage.setItem('access_token',res.data.access)
   localStorage.setItem('refresh_token',res.data.refresh)
   
  

  })
}
 

  return (
    <div>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon/>}
      aria-controls="panel1-content"
      id="panel1-header"
      
    >
      <Typography >choir</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        <div>
          hello welcome to choir click on below button to join choir group.
          <form onSubmit={(e)=>{
           e.preventDefault()
          
          setdepartment({
          name : e.target['choir'].value
          })     
          
          handleclick()
          }}>
          <input type='text' id='choir' name='choir' value='choir' disabled></input>
          <Button type='submit'>join</Button>



          </form>
        </div>
       
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Instruments</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Usher</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default Groups

