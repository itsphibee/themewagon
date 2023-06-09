import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

const pages = ['Home', 'About us', 'Services', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 return (
    <AppBar position="static"
    sx={{ background: 'linear-gradient(90deg, rgba(134,195,86,1) 5%, rgba(113,188,109,1) 35%, rgba(72,173,153,1) 74%)' }}>
      <Container maxWidth="xl" left="40">
        <Toolbar>
        <Container align="left">
            <Image src="/images/logo.png" height={30} width={100} alt="logo"/>
            </Container>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <Container  align="right">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
              </Container>
    
            <Menu id="menu-appbar" anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom',horizontal: 'right',}} keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'right', }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
