
// Header.jsx
import { AppBar, Toolbar, Button, Link } from '@mui/material';
import { useUser } from '../auth-routes/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';


  const appBarStyle = {
    backgroundColor: '#333c87',
    backgroundImage: 'url("../../resources/legoBlur.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    position: 'sticky',
    width: '100%',
    minHeight: '80px',
    top: 0,
    zIndex: 1000,
  };


  const logoRadiator = {
    cursor: "pointer",
    width: "220px",
    height: "auto",

    position: 'relative',
    rotate: '-8deg',
    bottom: '-30px',
    left: '30px',  
  }

const Header = () => {
  const { userRole, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navegar al LoginForm
  };

  const handleLogoClick = () => {
    navigate(userRole === 'noRole' ? '/' : `/${userRole}`);
  };

  const handleFederacionCampeonatosClick = () => {
    navigate('/federacion/campeonatos');
  };

  const handleFederacionReservasClick = () => {
    navigate('/federacion/reservas');
  };

  const handleFederacionTripulacionesClick = () => {
    navigate('/federacion/tripulaciones');
  };

  const handleFederacionLegocarsClick = () => {
    navigate('/federacion/legocars');
  };


  return (
    <AppBar sx={appBarStyle} position="static" >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <img
          src="../../resources/radiator.png"
          alt="Logo"
          style = {logoRadiator}
          className="logo"
          onClick={handleLogoClick}
          
        />
        
        {/* HEADER FEDERACION */}
        {userRole === 'federacion' && (          
          <Container sx={{ backgroundColor: "#F2F2F2",
          borderRadius: "30px", color:"black", minHeight:"50px", padding:"8px 0 0 0"}}>
            <Button component={Link} color="inherit" onClick={handleFederacionCampeonatosClick}>
              Campeonatos
            </Button>
            <Button component={Link} color="inherit" onClick={handleFederacionReservasClick}>
              Reservas
            </Button>
            <Button component={Link} color="inherit" onClick={handleFederacionTripulacionesClick}>
              Tripulaciones
            </Button>
            <Button component={Link} color="inherit" onClick={handleFederacionLegocarsClick}>
              Legocars
            </Button>
          </Container>
        )}
        
        {/* HEADER EQUIPO */}
        {userRole === 'equipo' && (          
          <Container sx={{ backgroundColor: "#F2F2F2",
          borderRadius: "30px", color:"black", minHeight:"50px", padding:"8px 0 0 0"}}>
            <Button component={Link} to="#" color="inherit">
              Campeonatos
            </Button>
            <Button component={Link} to="#" color="inherit">
              Mis Tripulaciones
            </Button>
            <Button component={Link} to="#" color="inherit">
              Mis Reservas
            </Button>
          </Container>
        )}
        
        {/* SE PUEDEN ELIMINAR */}
        {/* HEADER AYUNTAMIENTO */}
        {userRole === 'ayuntamiento' && (
          <Button component={Link} to="/ayuntamiento" color="inherit">
            Home Ayuntamiento
          </Button>
        )}

        {/* HEADER ASISTENTE */}
        
        {(!isAuthenticated && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={"../../resources/acceso.png"}
            alt="Iniciar Sesión"
            className='logo'
            style={{
              width: '35px',
              height: '35px',
              cursor: 'pointer',
              margin: '10px',
            }}
            onClick={handleLoginClick}
          />
        </div>
        )) || (
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor:'#8A2A2A', borderRadius:"10px"}}>
          <img
            src={"../../resources/off-button.png"}
            alt="Cerrar Sesión"
            className='logo'
            style={{
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              borderRadius:"10px",
              boxShadow: '0px px 5px 2px rgba(0,0,0,0.65)'
            }}
            onClick={handleLoginClick}
          />
        </div>
        )}
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
