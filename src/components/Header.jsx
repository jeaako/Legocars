
// Header.jsx
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { useUser } from '../auth-routes/UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navegar al LoginForm
  };

  const { userRole } = useUser();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333c87' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Legocars</Typography>
        {userRole === 'federacion' && (
          <Button component={Link} to="/federacion" color="inherit">
            Federación
          </Button>
        )}
        {userRole === 'ayuntamiento' && (
          <Button component={Link} to="/ayuntamiento" color="inherit">
            Ayuntamiento
          </Button>
        )}
        {/* Agrega más casos según sea necesario */}
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
            onClick={handleLoginClick}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
