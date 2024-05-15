

import { Inter } from "next/font/google";
import { Box, } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KAG WAITHAKA LOGIN",
  
};

export default function RootLayout({ children }) {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" >
        {'Copyright © '}
        <Link color="inherit" href="#">
          <div className='text-red text-center'>
            <p>
            Waithaka, Nairobi, Kenya. Phone Number: +254 714774503. Email: kagwaithakamission@gmail.com

            </p>
            <p>Copyright © 2024 KAG Waithaka Mission Center</p>
          


          </div>
      
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  
  return (
    
      
      

        <div className="rounded-b-lg md:container md:mx-auto bg-grey h-full" >
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
           
         
     
         
          <div className="touch-auto h-3/5">{children}</div>
          <div className="h-1/5"><Copyright></Copyright></div>
        
        </div> 
       
  );
}
