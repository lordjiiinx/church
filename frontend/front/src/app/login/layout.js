

import { Inter } from "next/font/google";
import { Box, } from '@mui/system';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KAG WAITHAKA LOGIN",
  
};

export default function RootLayout({ children }) {
  
  return (
    
      
      

        <div className=" rounded-b-lg md:container md:mx-auto " >
          <div className="bg-purple">
          <Box sx={{  borderRadius: 20, 
         
        }}>
            <AppBar position="static" color="transparent">
                 <Toolbar sx={{ margin:{sm:40,md:2}
         
        }}>
       
                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <Button color="info" href="#">Home</Button>
                    
                     </Typography>

                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <Button color="info" href="#">Home</Button>
                    
                     </Typography>

                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <Button color="info" href="#">Home</Button>
                    
                     </Typography>

                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <Button color="info" href="#">Home</Button>
                    
                     </Typography>
                     
                 </Toolbar>
             </AppBar>
        </Box>
  

          

          </div>
           
         
     
         
          <div>{children}</div>
        
        </div> 
       
  );
}
