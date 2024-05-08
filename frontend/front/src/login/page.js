'use client'



import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import List from './show';
import ListLoggedin from './listLogged';
import axios
 from "axios";
import { useEffect } from 'react';

function App() {
   const router = useRouter()
  const [appState, setAppState] = useState({
    logged: false,
    
    
    
  });
  





  useEffect(()=>{
    if(localStorage.getItem('refresh_token')!=null){
      updateToken()
      

      setAppState({logged:true})
      
      
      
    }
    else {

     router.push('/login')
      

    }

   
    },[])
   
  

const updateToken=async()=>{
  
 
  axios.post('token/refresh/',{
    refresh : localStorage.getItem('refresh_token')

  }).then((res)=>{
    if(res.status===200){
     
     localStorage.removeItem('refresh_token')
     localStorage.removeItem('access_token')
      localStorage.setItem('access_token',res.data.access)
      localStorage.setItem('refresh_token',res.data.refresh)
      router.refresh()
      
    
    }
  })

}
 
  
  const ListLog = ListLoggedin(List);
 
  
  

   
  
const handlesubmit = (e)=>{
  
    e.preventDefault()
    

    axios.post(
        
        'token/',{
            email : e.target['email'].value,
            password : e.target['password'].value
        }
    ).then((res)=>{
        setAppState({logged:true})
        localStorage.setItem('access_token',res.data.access)
        localStorage.setItem('refresh_token',res.data.refresh)
    })

}
  
  return (
    <div >
      
      <div >
        
        <ListLog isLogged={appState.logged}  handlesubmit={handlesubmit}
          />

          
        
        
      </div>
    
    </div>
  );
}
export default App;
