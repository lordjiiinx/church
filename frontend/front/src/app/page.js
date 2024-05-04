import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <div className="md:container md:rounded-md md:border md:border-indigo-600 md:mx-auto grid grid-cols-1 md:grid-cols-2">

      <div className="w-full pb-10 md:col-span-2 flex bg-grey rounded-b-lg">
        <div className="w-137 md:w-1/4 border-indigo-600 border rounded-md mr-10 ">
          image

        </div>
        <div className="pt-48 md:pt-10 ">
         <p> KAG WAITHAKA MISSION CENTER</p>
         
         <p>Where Every Soul Matters To God</p>

        </div>

      </div>

      <div className='md:col-span-2 '>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
      </div>

      <div>
        cazzama
      </div>






    </div>
  
    
  );
}
