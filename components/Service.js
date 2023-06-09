import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#ffffff',
  },
  palette: {
    primary: {
      main: '#ffffff',
     
    },
    
  },
});

export class Service extends Component {
  render() {
    return (
      <Container maxWidth="1100px" sx={{ background:"#f9f9f9", pl:40, pr:40, pt:10,  pb:10, }}>
        <Typography variant="h3" textAlign="center" padding={5}>
            Our Service
        </Typography>
        <Typography fontSize={17} color="#7E7E93" textAlign="center" sx={{ px: { xs: 10, sm:10, md: 10, xl: 50 } }} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br>
        </br>
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
</Typography>

<Grid container columnSpacing={{ sm:3, md: 5, xl:4 }} sx={{ 
  px: { xs: 1, sm:5, md: 10, xl: 40 },
}} pt={10} pb={20}>
  <Grid xs={12} sm={6} md={3} xl={3}>
    <Image src='/images/icon.png' alt='poi' width={150} height={120} />
    <Typography pl={4} > FULLY RESPONSIVE </Typography>
    <Typography color="#7E7E93" >Lorem ipsum dolor sit amet, con-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut </Typography>
  </Grid>
  <Grid xs={12} sm={6} md={3} xl={3}>
  <Image src='/images/icon.png' alt='poi' width={150} height={120} />
    <Typography pl={2}> SPEED OPTIMIZED </Typography>
    <Typography color="#7E7E93" >Lorem ipsum dolor sit amet, con-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut </Typography>
  </Grid>
  <Grid xs={12} sm={6} md={3} xl={3}>
  <Image src='/images/icon.png' alt='poi' width={150} height={120} />
    <Typography pl={2}> TONS OF FEATURE </Typography>
    <Typography color="#7E7E93" >Lorem ipsum dolor sit amet, con-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut </Typography>
  </Grid>

  <Grid xs={12} sm={6} md={3} xl={3}>
  <Image src='/images/icon.png' alt='poi' width={150} height={120} />
    <Typography pl={2}> CLOUD OPTION </Typography>
    <Typography color="#7E7E93" >Lorem ipsum dolor sit amet, con-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut </Typography>
  </Grid>
  
</Grid>
<Container color="#ffffff" sx={{ backgroundImage: 'url(/images/Office.png)', width:6920, height:300}}>
      <Typography color="#ffffff" variant="h5" pt={5} textAlign="center"> LOREM IPSUM DOLOR SIT AMET, CON-SECTETUR ADIPISING</Typography>
      <Typography color="#000010" variant="h9" pt={5} textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Typography>
      <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        
        />
      </Container>
      </Container>
    )
  }
}

export default Service