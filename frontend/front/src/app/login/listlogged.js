'use client'

import React from 'react';
import TextField from '@mui/material/TextField';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading,handlesubmit }) {
    
    function handleclick(){
      let email = document.getElementById('standard')
      axios.post('http://127.0.0.1:8000/api/password_reset/',{
        email : email.value
      }).then((res)=>{
        
        
        
      })}

    if (!isLoading) return <Component />;
    else return (

      
       
 <div>wooza</div>

       
         
   
     
    );
  };
  };

export default WithListLoading;