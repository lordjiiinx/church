import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Box, } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation'


const List = () => {
  const router = useRouter()
  if(localStorage.getItem('access_token')!=null){
    let mes=JSON.stringify(localStorage.getItem('access_token'))
     let mak =jwtDecode(mes)

     if(mak.groupss=='youth'){

      return(
        <div className='bg-grey rounded-b-lg h-full md:m-4 shadow-lg md:col-span-2 overscroll-contain'>
        <div className="rounded-b-lg bg-purple mt-0 md:mt-2 h-1/5">
           <Box >
             <AppBar position="static" color="transparent">
                  <Toolbar sx={{mt: 10
          
         }}>
        
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                      <Button color="info" href="#">youth and teens arena</Button>
                     
                      </Typography>
 
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Button color="info" href="#">Home</Button>
                     
                      </Typography>
 
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Button color="info" href="#">Sermon</Button>
                     
                      </Typography>
 
                       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Button color="info" href="#">Projects</Button>
                     
                      </Typography>
 
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Button color="info" href="#"><LogoutIcon></LogoutIcon></Button>
                     
                      </Typography>
                      
                  </Toolbar>
              </AppBar>
         </Box>
   
 
           
 
           </div>
           <div className='text-black text-center '>
 
       
         <h1 className="animate-bounce "><p>name</p></h1>
       
         
       </div>
           
            
       <div className='bg-youth md:text-xl text-red text-center h-96 md:h-48 rounded-b-lg mb-10 md:m-2 shadow-lg'>
        
           
          <p><strong>Serve God in your youth</strong></p> 
          <p><strong>Remember your Creator in the days of your youth,</strong></p>
 
 
 
 </div>
 <div className='bg-teen p-2 h-1/4 md:text-xl h-96 md:h-48 text-bubble-gum text-center rounded-b-lg mb-10 md:m-2 shadow-lg'>
 <strong>
 <p>The Teens :</p>
 <p>Start children off on the way they should go, and even when they are old they will not turn from it... Proverbs 22:6</p>
 </strong>
 
 
           
        
 
 
 </div>
 
 <div className='bg-purple h-1/4 text-silver text-center rounded-b-lg mb-10 md:m-2 shadow-lg'>
   
 <p className='p-2'>
   There are many departments available for God’s glory. Anyone can participate in this department including you . If you are interest in joining the choir, or maybe the instruments like play the drums.
 </p>
 
 <p>What is your talent :</p>
 <p>To one He gave five talents, to another two talents, and to another one talent— each according to his own ability. And he went on his journey. Matthew 25:15..Click on the join department option in the navigation bar or click on </p>
 
 </div>
 <div className='bg-purple text-silver h-1/4 text-center rounded-b-lg mb-10 md:m-2 shadow-lg'>
   
 <p className='p-2'>
   There are many departments available for God’s glory. Anyone can participate in this department including you . If you are interest in joining the choir, or maybe the instruments like play the drums.
 </p>
 
 <p>What is your talent :</p>
 <p>To one He gave five talents, to another two talents, and to another one talent— each according to his own ability. And he went on his journey. Matthew 25:15..Click on the join department option in the navigation bar or click on </p>
 
 </div>
 
     </div>
     
   )
      

     }


     else if(mak.groupss=='women')
      {
        return(
          <div className='bg-grey rounded-b-lg h-full md:m-4 shadow-lg md:col-span-2 overscroll-contain'>
          <div className="rounded-b-lg bg-bermuda mt-0 md:mt-2 h-1/5">
             <Box >
               <AppBar position="static" color="transparent">
                    <Toolbar sx={{mt: 10
            
           }}>
          
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        <Button color="info" href="#"><strong><p>WWK</p></strong></Button>
                       
                        </Typography>
   
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="info" href="#">Home</Button>
                       
                        </Typography>
   
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="info" href="#">Sermon</Button>
                       
                        </Typography>
   
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="info" href="#">Projects</Button>
                       
                        </Typography>
   
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="info" onClick={()=>{
                     localStorage.removeItem('refresh_token')
                     localStorage.removeItem('access_token')

                    router.push('/login')}}><LogoutIcon></LogoutIcon></Button>
                       
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
           </Box>
     
   
             
   
             </div>
             <div className='text-black text-center '>
   
         
           <h1 className="animate-bounce "><p>name</p></h1>
         
           
         </div>
             
              
         <div className='bg-family md:text-xl text-red text-center h-96 md:h-48 rounded-b-lg mb-10 md:m-2 shadow-lg'>
          
             
            <p><strong>Family
</strong></p> 
            <p><strong>but as for me and my house, we will serve the Lord...Joshua 24:15</strong></p>
   
   
   
   </div>
  
   
   <div className='bg-tahiti h-1/4 text-black text-center rounded-b-lg mb-10 md:m-2 shadow-lg'>
     
   <p className='p-2'>
     There are many departments available for God’s glory. Anyone can participate in this department including you . If you are interest in joining the choir, or maybe the instruments like play the drums.
   </p>
   
   <p className='p-2'>What is your talent :</p>
   <p>To one He gave five talents, to another two talents, and to another one talent— each according to his own ability. And he went on his journey
    . Matthew 25:15..Click on the join department option in the navigation bar or click on </p>
   <p className='p-2'>
    <br></br>
   you can watch the latest updates and sermons by clicking the sermons option above.
To view the latest project click on the projects options above.
   </p>
   </div>
   
   
       </div>
       
     )

      }
  }

 
 
  
   
};
export default List;