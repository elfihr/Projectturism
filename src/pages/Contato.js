import React from 'react'
import Layouts from '../components/Layouts'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Contato = () => {
  return (
    <Layouts>
      <Box sx={{
        my:5,
        ml:10,
        '& h4':{mb:2,fontWeight:'bold'}
        }}>
        <Typography variant='h4'>Contato</Typography>
        <p>Entre em contato conosco pelos contatos abaixo:</p>
      </Box>
      <Box sx={{
        m:3,
        width:'600px',
        ml:10,
        '@media (max-width:600px)':{
          width:'300px'
        }
        }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',textAlign:'center'}}>Detalhes para Contato</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <tableCell>
                  <CallIcon sx={{pt:1}} /> (21) 1234-5678 
                </tableCell>        
              </TableRow>
              <TableRow>
                <tableCell>
                  <MailIcon sx={{pt:1}} /> travelfirh@fihr.com
                </tableCell>        
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layouts>
  )
}

export default Contato