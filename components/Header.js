import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';


export class Header extends Component {
  render() {
    return (
      <Container maxWidth="1100px" sx={{ pb: 25,  pt:8, px: { xs: 1, sm:5, md: 10, xl: 40 }, color:"white", background: 'linear-gradient(90deg, rgba(134,195,86,1) 5%, rgba(113,188,109,1) 35%, rgba(72,173,153,1) 74%)' }}>
      <Grid container spacing={2} pt={15}>
  <Grid xs={12} sm={12} md={6} xl={6}> 
      <Container sx={{pb:3}}>
      <Typography variant="h4" letterSpacing={6} pb={3}>
        A PASSIONATE WEB 
        <br/>
        COMPANY
      </Typography>
      <hr width="110px" size="5" color="white"></hr>
      </Container>
      
      <Container>
        <Container sx={{pb:3, }}>
      <Typography variant="h6" textAlign="left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna
      </Typography>
      </Container>
      <Button variant="outlined" size="large" sx={{color:"white", border:"2px white solid"}} >Get Started</Button>
      </Container>
      </Grid>
      <Grid xs={12} sm={12} md={6} xl={6}>
       <Image src="/images/grid.png" width={600} height={300} alt="grid" />
      </Grid>
      </Grid>

      </Container>
    )
}
}

export default Header