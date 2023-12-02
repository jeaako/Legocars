import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import PropTypes from 'prop-types';

const HeaderFed = ({ onLoginClick }) => {
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
              Campeonato
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Reservas
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Tripulaciones
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Legocars
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" color="inherit">
              Otros
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

HeaderFed.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default HeaderFed;