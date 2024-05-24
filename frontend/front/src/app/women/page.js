'use client'

import React from 'react'
import { Inter } from "next/font/google";
import { Box} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Groups from '../component/Groups';
import { jwtDecode } from 'jwt-decode';

import axios
 from "axios";



function Page() {
   
  const [date, setdate] =useState();
  const [group, setGroup] = useState(
    ''
    
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
   
  

  })}
  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/eventpost/',{
      event: e.target['event'].value,
     
      department : group,
      date : date
    }
  ,
  {
    headers: {
      
      'Authorization' : 'Bearer ' + String(localStorage.getItem('access_token')?localStorage.getItem('access_token'):null),

    }
 } ).then((res)=>{
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

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    
    
  };
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
 
    
    const router = useRouter()
    if(localStorage.getItem('access_token')!=null){
        let mes=JSON.stringify(localStorage.getItem('access_token'))
         let mak =jwtDecode(mes)
        

        
         return (
            <div>

        
                    
                    <div className="rounded-b-lg bg-bermuda mt-0 md:mt-2 h-1/3">
                     <Box >
                       <AppBar position="static" color="transparent">
                            <Toolbar sx={{mt: {
                              sm:7,
                              xs:7,
                              md: 0,
                              lg:0

                            }
                    
                   }}>
                  
                                <Typography variant="h1" component="div" sx={{ flexGrow: 1
                                }}>
                                <Button color="info" onClick={()=>{
                                  router.push('/women')
                                }} ><strong><p>WWK</p></strong></Button>
                               
                                </Typography>
           
                                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                                <Button color="info" href="/login">Home</Button>
                               
                                </Typography>
           
                                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                                <Button color="info" href="#">Sermon</Button>
                               
                                </Typography>
           
                                 <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                                <Button color="info" href="#">Projects</Button>
                               
                                </Typography>
           
                                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                                <Button color="info" onClick={()=>{
                             localStorage.removeItem('refresh_token')
                             localStorage.removeItem('access_token')
        
                            router.push('/login')}}><LogoutIcon></LogoutIcon></Button>
                               
                                </Typography>
                                
                            </Toolbar>
                        </AppBar>
                   </Box>
             
           
                     
           
                     </div>
                <div className='bg-women h-72 w-3/4'>
                    
                </div>
                <div>
                  {
                    mak.is_staff=='true' && mak.groupss[0]=='women'? <div className='grid grid-cols-1 justify-items-center'>
                      <form onSubmit={handleSubmit} className='w-full'>
                          
                      <div className='p-2 w-full flex justify-center'>
          <InputLabel id="categ-autowidth-label">department</InputLabel>
          <Select
          labelId="categ-autowidth-label"
          id="group"
          value={group}
          onChange={handleGroupChange}
          autoWidth
          label="Group"
          sx={
            {
              width: 1/4,
            }
          }
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="choir">choir</MenuItem>
          <MenuItem value="usher">usher</MenuItem>
          <MenuItem value="instruments">instruments</MenuItem>
        </Select>
          </div>

          <div className='w-full p-2 flex justify-center'>
                 <LocalizationProvider  dateAdapter={AdapterDayjs}>
      
                <DatePicker label="event scheduled date" value={date}
                        onChange={(newValue) => setdate(newValue)} sx={
                          {
                            width:1/4,
                          }
                        }  />
        
                 </LocalizationProvider>
      

           </div>
                      <div className='m-2 w-3/4 flex justify-center '>
                      <Textarea

                          id='event'
                          
                          maxRows={4}
                          name='event'
                          sx={
                           [
                            {
                              width: 1,
                            }
                           ]
                          }
                          aria-label="maximum height"
                          
    
                            />
                      </div>

                 

          <div className='md:p2 m-20'>
          <Button type='submit' variant="outlined">
                         save
                 </Button>

             
          </div>


                      </form>
                      
                    

                   
                    </div>: <div> 

                      <Groups />
        
                    <div>
                      <p>
                      Women of Faith :
                      </p>
                   <p>
                   These women had followed Jesus and ministered to Him while He was in Galilee, 
            and there were many other women who had come up to Jerusalem with Him.
            
                   </p>
            
                    </div>
            
                    <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
                      <div>
                        meeting1 talk
                      </div>
            
                      <div>
                        meeting 2 talk
                      </div>
            
                      <div>
                        meeting3
                      </div>
                      <div>
                        meeting 2 talk
                      </div>
                      <div>
                        meeting 2 talk
                      </div>
                      <div>
                        meeting 2 talk
                      </div>
                      <div>
                        meeting 2 talk
                      </div>
            
                    </div></div>
                  }

                </div>
      
               
                
        
               
            </div>
         )
    
        
        
        }    
 
  
}

export default Page