'use client'

import React from 'react'
import { Inter } from "next/font/google";
import { Box} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Groups from '../component/Groups';
import { jwtDecode } from 'jwt-decode';

import axios
 from "axios";



function Page() {
  
 
    
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
                    mak.is_staff=='true'? <div>jabb</div>: <div> 

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