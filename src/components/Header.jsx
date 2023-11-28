// src/components/Header.jsx
//import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Legocars</Typography>
        <Button color="inherit">
          <Link href="#" color="inherit">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="#" color="inherit">
            Campeonato
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="#" color="inherit">
            Otro enlace
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;