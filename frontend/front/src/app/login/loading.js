import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export default function Variants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
    
      {/* For other variants, adjust the size with `width` and `height` */}
      <div className='container mx-auto h-screen animate-pulse '>

      <Skeleton animation="wave" variant="rectangular" height={400} >
      

      </Skeleton>

      </div>
    
      
      
    </Stack>
  );
}