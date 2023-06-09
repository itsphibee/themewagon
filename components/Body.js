import React, { Component, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export class Body extends Component {
  render() {
    

    return (
      <Grid container spacing={3} sx={{ px: { xs: 3, sm:3, md: 5, xl: 40 }}} pt={15} pb={10}>
  <Grid xs={12} sm={12} md={6} xl={6}>
        <Container>
            <Typography fontSize={26} pb={5} letterSpacing={1} color="#7E7E93"> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa recusandae consequatur veniam, reiciendis odit quia eaque vel eius a.

</Typography>
<Typography letterSpacing={1} color="#7E7E93">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla-mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, aspernatur.
            </Typography>
        </Container>
        </Grid>

        <Grid xs={12} sm={12} md={6} xl={6}>
        <div>
              <Carousel width={400} height={400}>
                  <div>
                      <img src="/images/1.jpg" alt="image1"/>
                  </div>
                  <div>
                      <img src="/images/2.jpg" alt="image2" />
                  </div>
                  <div>
                      <img src="/images/3.jpg" alt="image3"/>
                  </div>
                  
              </Carousel>
            </div>
        </Grid>

        </Grid>
      
    )
  }
}

export default Body