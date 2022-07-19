
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import MovieImg from '../assets/movielogo.png';


const navItems = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
        <Typography variant="title">
        <img src={MovieImg} alt="logo" height="44"/>
          </Typography>
          <Box sx={{ display: 'block', ml: 40 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
