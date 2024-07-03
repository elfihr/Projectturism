import React from 'react'
import Layouts from '../components/Layouts'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { Circuit } from '../helper/data'

const Circuitos = () => {
  return (
    <Layouts>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Circuit.map((menu) => (
          <Card sx={{ maxWidth: "380px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography 
                variant="h5" 
                textAlign={'center'}
                fontFamily={'bold'}
                gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography
                  variant="body2"
                  bgcolor={'black'}
                  color={'white'}
                  textAlign={'center'}
                  width={'150px'}
                  mx={'100px'}
                  borderRadius={'8px'}
                >{menu.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layouts>
  )
}

export default Circuitos