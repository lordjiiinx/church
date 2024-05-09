import { Inter } from "next/font/google";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KAG WAITHAKA LOGIN",
  
};

export default function RootLayout({ children }) {
  return (
    
      
      

        <div className=" rounded-b-lg md:container md:mx-auto text-#ffffff  " >
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="#110808">
                   <Toolbar>
         
                       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                             Home
                       </Typography>
                       <Button color="success" href="#">logout</Button>
                   </Toolbar>
               </AppBar>
          </Box>
          <div>{children}</div>
        
        </div> 
       
  );
}
