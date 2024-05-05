import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image'

import cropped from '../../public/cropped-cropped-KAG-LOGO-e1662111185707.png'
import Chair from '../../public/chair.png'



export default function Home() {
  return (
    <div className="md:container md:rounded-md md:border md:border-indigo-600 md:mx-auto grid grid-cols-1 md:grid-cols-2">

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
        <div className='p-2'>
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

      <div>

        <div className='bg-local h-40' style={{ backgroundImage: 'url(' + Chair + ')', backgroundSize: 'auto' }}>
          kkaka

        </div>

        <div>

        </div>
      </div>

      






    </div>
  
    
  );
}
