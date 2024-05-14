'use client'
import React from 'react'
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios
 from "axios";


import { useRouter } from 'next/navigation'




function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading,handlesubmit }) {
    const router = useRouter()
   
    
    function Copyright() {
      return (
        <Typography variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}
          <Link color="inherit" href="#">
            <div className='text-red text-center'>
            Waithaka, Nairobi, Kenya. Phone Number: +254 714774503. Email: kagwaithakamission@gmail.com
  Copyright © 2024 KAG Waithaka Mission Center
  
            </div>
        
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
  
  
    
    
    
    function handleclick(){
      let email = document.getElementById('email')
      axios.post('http://127.0.0.1:8000/api/password_reset/',{
        email : email.value
      }).then((res)=>{
      
        
        
        
        
      })}

    if (isLoading) return <Component />;
    else return (
      
         <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            login once
          </Typography>
          
          <form onSubmit={handlesubmit}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
              
            />
             
            <TextField
              margin="normal"
              
              fullWidth
              name="password"
              label="Password"
              
              
              type="password"
              id="password"
              
            />
            <Grid container>
             
             <Grid item>
               <button onClick={handleclick}>
                 {"Forgot password"}

               </button>
             </Grid>
           </Grid>
            <Button
            color='primary'
            
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              login
            </Button>
           
          </form>
        </Box>
        <br />
        <Copyright />
       
      </Container>
    
     
      

     
    );
  };
  };

export default WithListLoading;
