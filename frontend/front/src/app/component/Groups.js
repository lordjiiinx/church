'use client'
import React, { useActionState } from 'react'
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
import { useRouter } from 'next/navigation'


function Groups() {

  const router = useRouter()
 const [department, setdepartment] =useState(
 {
 name : '',
 }
 );
 const [value, setvalue] =useState(
  {
  dep : false,
  dep2 : false,
  dep3 : false,
  }
  );
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
 
    function groupind(depart){
  if(localStorage.getItem('access_token')){
    let mes=JSON.stringify(localStorage.getItem('access_token'))
    let mak =jwtDecode(mes)
    axios.get('http://127.0.0.1:8000/api/depart/' + mak.user_id + '/' + depart,
   {
    headers: {
      
      'Authorization' : 'Bearer ' + String(localStorage.getItem('access_token')?localStorage.getItem('access_token'):null),

    }
  }).then((res)=>{
    console.log(res.data)
    const data = res.data[0]
    
    if(data.department=='choir'){
      setvalue({
        dep : true
      })
      

    }
    else if(data.department=='instruments')
      {
        setvalue({
          dep2 : true
        })

      }
      else if(data.department=='usher')
        {
          setvalue({
            dep3 : true
          })
  
        }
   
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
 


  


  

 
 
  }
 

  function handleclick() {

    
    if(localStorage.getItem('access_token')!=null){
      
        
      
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
  

    
}
 

  return (
    <div>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon/>}
      aria-controls="panel1-content"
      id="panel1-header"
      onClick={()=>{
        setdepartment({
          name : 'choir'
        })
        groupind(department.name)
        
        
      }}
      
    >
      <Typography >choir</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep==true?<div>home page choir </div>
      
      :
      
      <div>
          hello welcome to choir click on below button to join choir group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          handleclick()
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
        
       
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
       onClick={()=>{
        setdepartment({
          name : 'instruments'
        })
        groupind(department.name)
      }}
    >
      <Typography>Instruments</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep2==true?<div>home page instruments </div>
      
      :
      
      <div>
          hello welcome to instruments click on below button to join instruments group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          handleclick()
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
      onClick={()=>{
        setdepartment({
          name : 'usher'
        })
        groupind(department.name)
      }}
      
    >
      <Typography>Usher</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep3==true?<div>home page usher </div>
      
      :
      
      <div>
          hello welcome to usher click on below button to join usher group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          handleclick()
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
      </Typography>
    </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default Groups

