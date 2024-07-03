import React from 'react'
import Layouts from '../components/Layouts'
import { Box, Typography } from '@mui/material'

const Sobre = () => {
  return (
    <Layouts>
      <Box 
        sx={{my:10,
        textAlign:'center',
        '& p':{textAlign:'justify',
        padding:'1rem'},
        '@media (max-width:600px':{
          mt:0,//margin top
        }
        }}
        >
        <Typography  
          variant={'h4'} 
          >
          Sobre Nós
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

        </p>

      </Box>
    </Layouts>
  )
}

export default Sobre