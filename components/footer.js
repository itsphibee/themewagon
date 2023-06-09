import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="#D3DFDF" textAlign="center">
      {'Copyright © '}
      <Link color="#ffffff" href="https://themefisher.com/">
        Themefisher
      </Link>
      |  All right reserved
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box sx={{  display: 'flex', height: 70,  backgroundColor:"#272727", flexDirection: 'column', }}>
      <CssBaseline />
      
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', }}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}