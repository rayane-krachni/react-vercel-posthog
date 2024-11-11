// Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[{ mr: 2 }, open && { display: 'none' }]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
