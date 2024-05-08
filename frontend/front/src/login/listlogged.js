'use client'
import React from 'react';

import TextField from '@mui/material/TextField';
import axios
 from "axios";
import { useRouter } from 'next/navigation'


export default function ListLoggedin(Component) {
  const router = useRouter()
 
 

  return function Logged({ isLogged,handlesubmit }) {

    

    

    function handleclick(){
      let email = document.getElementById('standard')
      axios.post('password_reset/',{
        email : email.value
      }).then((res)=>{
        router.push('resetpassword')
        
        
      })


    }
    if (isLogged) return <Component />;
    else return (

      
       
 <div className='rounded-lg  px-8 py-4 sm:px-2 font-serif antialiased sm:py-2 md:container bg-black md:mx-auto md:grid md:grid-cols-3 md:gap-4  sm:inline-block '>
 <div className='text-sm md:text-base  tracking-tight col-span-3 justify-start text-white  text-balance'>
         hello ! please login to use the functionalities of this website. The website enables logged in users to communicate with each other and can purchase stones online. Once the loading of the
         stones is complele please select amount you want to pay and wait for an email from the manager
    </div>
      <div className='col-span-3 rounded  outline outline-offset-2 outline-2 bg-gradient-to-r from-cyan-500 to-blue-500  outline-red'> 
          
       
          
           <form  onSubmit={handlesubmit}>
           <div className=' px-5 py-15  text-white ' >
              <div className='display-block'> 
                <label htmlFor="email">Email:</label>
                <TextField name="email" id="standard"   variant="standard"  required/>

              </div>
              <div  className='display-block'>
                < label htmlFor="password">password:</label>
                <TextField name='password' id="standard-basic"  variant="standard" required />

              </div>
              <div  className='display-block  col-span-2'>
                
                
                <div className='size-1/2' onClick={handleclick}>forgot password? please enter email then <u>click here</u> </div>
              <button className=' size-1/4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  m-8' type="submit">Submit</button>

              </div>

              </div>    
              </form>

          
                
     
                 
             
            
          </div>
        
            </div>
      
            

       
         
   
     
    );
  };
}

