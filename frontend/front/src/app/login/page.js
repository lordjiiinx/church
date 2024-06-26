'use client'

import React, { useEffect, useState } from 'react';

import List from './show';
import WithListLoading from './listlogged';

import axios
 from "axios";



 

function App() {
  const ListLoading = WithListLoading(List);
  

  const [appState, setAppState] = useState({
    loading: false,
    
  });

  
  const updateToken=async()=>{
  
 
    axios.post('http://127.0.0.1:8000/api/token/refresh/',{
      refresh : localStorage.getItem('refresh_token')
  
    }).then((res)=>{
      if(res.status===200){
       
       localStorage.removeItem('refresh_token')
       localStorage.removeItem('access_token')
        localStorage.setItem('access_token',res.data.access)
        localStorage.setItem('refresh_token',res.data.refresh)
      
        
      
      }
    })
  
  }


  useEffect(()=>{
    if(localStorage.getItem('refresh_token')!=null){
      updateToken()
      

      setAppState({loading:true})
      
      
      
      
    }
    

    
   
    },[setAppState])
   

  const handlesubmit = (e)=>{
  
    e.preventDefault()
  
    

    axios.post(
        
        'http://127.0.0.1:8000/api/token/',{
            email : e.target['email'].value,
            password : e.target['password'].value
        }
    ).then((res)=>{
        setAppState({loading:true,
          
        
        })
        localStorage.setItem('access_token',res.data.access)
        localStorage.setItem('refresh_token',res.data.refresh)

        router.push('/login')
    })

}
  
  return (
    <div className=''>
      
      <div className=''>
        <ListLoading isLoading={appState.loading} handlesubmit={handlesubmit} />
      </div>
     
    </div>
  );
}
export default App;