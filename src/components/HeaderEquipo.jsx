import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const HeaderEquipo = ({ onLoginClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333c87' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Legocars</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Inicio
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Campeonatos
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Mis Tripulaciones
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Mis Reservas
            </Link>
          </Button>
          <img
            src={"../../resources/acceso.png"}
            alt="Cerrar Sesión"
            style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
            onClick={onLoginClick}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderEquipo;