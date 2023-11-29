// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import LoginIcon from '../../resources/acceso.png';
import './Header.css';


const Header = () => {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Legocars</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
          <img
            src={LoginIcon}
            alt="Iniciar Sesión"
            style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              marginLeft: '10px', 
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};



export default Header;