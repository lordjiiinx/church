'use client'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import axios
 from "axios";

 import { useRouter } from 'next/navigation'


import cropped from '../../public/cropped-cropped-KAG-LOGO-e1662111185707.png'






export default function Home() {
  const [group, setGroup] = useState(
    ''
    
  );
  const router = useRouter()
  
    const handleGroupChange = (event) => {
      setGroup(event.target.value);
      
    };

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
        router.push('/login')

        
        
        
      } },[])
      
  
    
  
  const [values, setValues] = useState({
    email: "",
    name: "",
    
    password: "",

  })


  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

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

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/signin',{
      email : values.email,
      name : values.name,
      password : values.password,
      groupss : group,
    }).then((res)=>{
     console.log(res)
     
     

    })
        
  }

  return (
    <div className="overflow-auto touch-auto md:container md:rounded-md md:border md:border-indigo-600 md:mx-auto grid grid-cols-1 md:grid-cols-2">

      <div className="w-full pb-10 md:col-span-2 flex bg-grey rounded-b-lg shadow-2xl">
        <div className="w-137 md:w-1/4 border-indigo-600 border rounded-md mr-10 ">
        <Image src={cropped} alt="Picture of the author" priority />

        </div>
        <div className="pt-48 md:pt-10 block">
         <p> KAG WAITHAKA MISSION CENTER</p>
         
         <p>Where Every Soul Matters To God</p>

        </div>

      </div>

      <div className='md:col-span-2 mb-10 md:mb-4'>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
          width: 1,
          
          
        },
      }}
    >
     
      <Paper elevation={3} >
       <div className='text-center text-2xl'>
        <p>PREACHING THE WORD, CHANGING THE WORLD</p>
       <p className='block'> BELIEVE.RECEIVE.BECOME</p>
               
              
       
       </div>

        </Paper>
    </Box>
      </div>

      <div className='bg-grey rounded-b-lg mb-10 md:m-2 text-red text-center shadow-lg'>
     <p>OUR VISION</p> 
An Urban Multi-Ethnic Congregation that Envisions to fulfill the Mission of God in the world.
      </div>


      <div className='bg-grey rounded-b-lg mb-10 md:m-2 shadow-lg text-red text-center'>
     <p>WE EXIST TO:</p> 

     <p>Passionately Worship God(Feel).</p>
     <p>Have Warm Fellowship(Connect).</p>
     <p>Have Intentional Discipleship(Grow).</p>
     <p>Exercise Gifts(Serve).</p>
     <p>Evangelize(Soul Winning).</p>

      </div>


      <div className='bg-grey rounded-b-lg mb-10 md:m-2 shadow-lg text-red text-center md:col-span-2 grid justify-items-center'>
        <div className='p-2 '>
        <p><strong>The Great Commission.</strong></p>
Matthew 28: 19-20
19 Go therefore and make disciples of all nations, baptizing them in[a] the name of the Father and of the Son and of the Holy Spirit, 20 teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”
        </div>

        <div className='p-2'> 
        <p><strong><u>Our Core Values :</u></strong></p>
        <p>Prayer</p>
        <p>Smile</p>
        <p>Stewardship</p>
        <p>Ex-positional Preaching</p>
        <p>Cell Groups</p>
        <p>Family</p>
        <p>Community Transformation</p>
        <p>Excellence</p>
        <p>Missions</p>
        
        </div>
      </div>

      <div className='bg-grey rounded-b-lg mb-10 md:m-2 shadow-lg md:col-span-2 overflow-y-auto overscroll-contain'>

        <div className='bg-custom h-1/4 md:text-xl text-silver text-center'>
          <p className='p-2 '>
          welcome to our sanctuary
you may sign in  below to view our services, join a group or view and contribute to a project.
          </p>

        </div>

        <div className=''>
          <div className='md:p2 m-20'>

             <TextField  margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange} sx={{width: 1}}/>
          </div>
          
          <div className='md:p2 m-20'>
            <TextField  margin="normal"
              required
              fullWidth
              name="name"
              label="name"
              value={values.name}
              onChange={handleChange}
              
              id="name"
              autoComplete="name" sx={{width: 1}}/>
          </div>

          <div className='md:p2 m-20'>
          <InputLabel id="categ-autowidth-label">Group</InputLabel>
          <Select
          labelId="categ-autowidth-label"
          id="group"
          value={group}
          onChange={handleGroupChange}
          autoWidth
          label="Group"
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="youth">Youth & Teens</MenuItem>
          <MenuItem value="women">Women's Group</MenuItem>
          <MenuItem value="men">Men's group</MenuItem>
        </Select>
          </div>

          <div>
          <div className='md:p2 m-20'>

             <TextField type='password'  margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              
              id="password"
              autoComplete="current-password" sx={{width: 1}}/>
          </div>

          </div>
          <div className='md:p2 m-20'>
          <Button onClick={handleSubmit} variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>
                         signin
                 </Button>

             
          </div>

         

        </div>
      </div>
      

      <div className='bg-grey rounded-b-lg mb-10 md:m-2 shadow-lg md:col-span-2'>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      </div>

      






    </div>
  
    
  );
}
