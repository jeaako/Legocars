
// Header.jsx
import { AppBar, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const Header = ({ onLoginClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333c87' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Legocars</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={"../../resources/acceso.png"}
            alt="Iniciar Sesión"
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

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Header;
