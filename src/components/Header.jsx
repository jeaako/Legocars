// Header.jsx
import { useState } from "react";
import { AppBar, Toolbar, Button, Link, Menu, MenuItem, Snackbar, Alert } from "@mui/material";
import { useUser } from "../auth-routes/UserContext";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

const appBarStyle = {
  backgroundColor: "#333c87",
  backgroundImage: 'url("../../resources/legoBlur.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "#fff",
  position: "sticky",
  width: "100%",
  minHeight: "80px",
  top: 0,
  zIndex: 1000,
};

const logoRadiator = {
  cursor: "pointer",
  width: "220px",
  height: "auto",

  position: "relative",
  rotate: "-8deg",
  bottom: "-30px",
  left: "30px",
};

const Header = () => {
  const { userRole, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const [carreraFinalSolicitada, setCarreraFinalSolicitada] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLoginClick = () => {
    setCarreraFinalSolicitada(false);
    navigate("/login"); // Navegar al LoginForm
  };

  const handleLogoClick = () => {
    navigate(userRole === "noRole" ? "/" : `/${userRole}`);
  };

  /*--------------------FEDERACIÓN----------------------*/

  const handleFederacionCampeonatosClick = () => {
    navigate("/federacion/campeonatos");
  };
  const handleFederacionFacturasClick = () => {
    navigate("/federacion/facturas");
  };

  const handleFederacionReservasClick = () => {
    navigate("/federacion/reservas");
  };

  const handleFederacionTripulacionesClick = () => {
    navigate("/federacion/tripulaciones");
  };

  const handleFederacionLegocarsClick = () => {
    navigate("/federacion/legocars");
  };

  const handleFederacionRankingClick = () => {
    navigate("/federacion/ranking");
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleSolicitarCarreraFinal = () => {
    // Lógica para solicitar la carrera final
    // Puedes agregar aquí la lógica para mostrar un mensaje o realizar una solicitud al backend
    // Actualizar el estado para indicar que la carrera final ha sido solicitada
    setCarreraFinalSolicitada(true);
    // Cerrar el menú después de solicitar la carrera final
    handleClose2();
    // Mostrar el Snackbar
    setSnackbarOpen(true);
  };


  /*--------------------EQUIPO------------------*/

  const handleEquipoCampeonatosClick = () => {
    navigate("/equipo/campeonatos");
  };

  const handleEquipoMisTripulacionesClick = () => {
    navigate("/equipo/mistripulaciones");
  };

  const handleEquipoMisReservasClick = () => {
    navigate("/equipo/misreservas");
  };

  return (
    <AppBar sx={appBarStyle} position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src="../../resources/radiator.png"
          alt="Logo"
          style={logoRadiator}
          className="logo"
          onClick={handleLogoClick}
        />

        {/* HEADER FEDERACION */}
        {userRole === "federacion" && (
          <Container
            sx={{
              backgroundColor: "#F2F2F2",
              borderRadius: "30px",
              color: "black",
              minHeight: "50px",
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
              <Button
                component={Link}
                color="inherit"
                aria-controls="simple-menu1"
                aria-haspopup="listbox"
                onMouseOver={(event) => setAnchorEl(event.currentTarget)}
               
              >
                Campeonatos              
              </Button>
              <Menu
                id="simple-menu1"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  onMouseLeave: handleClose, // Cerrar el menú cuando el ratón salga de él
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
               
                <MenuItem onClick={handleFederacionCampeonatosClick} style={{ justifyContent: 'center' }}>Solicitar</MenuItem>
                 {/* Cambiar handleClose */}
                <MenuItem onClick={handleFederacionFacturasClick} style={{ justifyContent: 'center' }}>Pagar Factura</MenuItem>
              </Menu>
             
            <Button
              component={Link}
              color="inherit"
              onClick={handleFederacionReservasClick}
            >
              Reservas
            </Button>
            <Button
              component={Link}
              color="inherit"
              onClick={handleFederacionTripulacionesClick}
            >
              Tripulaciones
            </Button>
            <Button
                component={Link}
                color="inherit"
                onClick={handleFederacionLegocarsClick}
              >
              Legocars
            </Button>
           
              <Button
                component={Link}
                color="inherit"
                aria-controls="simple-menu2"
                aria-haspopup="listbox"
                onMouseOver={(event) => setAnchorEl2(event.currentTarget)}
              >
              Otros
            </Button>
            <Menu
                id="simple-menu2"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                MenuListProps={{
                  onMouseLeave: handleClose2, // Cerrar el menú cuando el ratón salga de él
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                
                <MenuItem
                  onClick={carreraFinalSolicitada ? null : handleSolicitarCarreraFinal}
                  disabled={carreraFinalSolicitada}
                  style={{ justifyContent: 'center' }}
                >
                  Solicitar Carrera Final
                </MenuItem>
                <MenuItem onClick={handleFederacionRankingClick} style={{ justifyContent: 'center' }}>Ranking</MenuItem>
              </Menu>
               {/* Snackbar para mostrar el mensaje temporal */}
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000} // Duración en milisegundos (3 segundos en este caso)
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Añade esta línea
              >
                <Alert
                  elevation={6}
                  variant="filled"
                  onClose={handleSnackbarClose}
                  severity="success"
                >
                  Carrera final solicitada
                </Alert>
              </Snackbar>
          </Container>
        )}

        {/* HEADER EQUIPO */}
        {userRole === "equipo" && (
          <Container
            sx={{
              backgroundColor: "#F2F2F2",
              borderRadius: "30px",
              color: "black",
              minHeight: "50px",
              padding: "8px 0 0 0",
            }}
          >
            <Button
              component={Link}
              color="inherit"
              onClick={handleEquipoCampeonatosClick}
            >
              Campeonatos
            </Button>
            <Button
              component={Link}
              color="inherit"
              onClick={handleEquipoMisTripulacionesClick}
            >
              Mis Tripulaciones
            </Button>
            <Button
              component={Link}
              color="inherit"
              onClick={handleEquipoMisReservasClick}
            >
              Mis Reservas
            </Button>
          </Container>
        )}

        {/* SE PUEDEN ELIMINAR */}
        {/* HEADER AYUNTAMIENTO */}
        {/*userRole === "ayuntamiento" && (
          <Button component={Link} to="/ayuntamiento" color="inherit">
            Home Ayuntamiento
          </Button>
        )*/}

        {/* HEADER ASISTENTE */}

        {(!isAuthenticated && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={"../../resources/acceso.png"}
              alt="Iniciar Sesión"
              className="logo"
              style={{
                width: "35px",
                height: "35px",
                cursor: "pointer",
                margin: "10px",
              }}
              onClick={handleLoginClick}
            />
          </div>
        )) || (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#8A2A2A",
              borderRadius: "10px",
            }}
          >
            <img
              src={"../../resources/off-button.png"}
              alt="Cerrar Sesión"
              className="logo"
              style={{
                width: "60px",
                height: "60px",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px px 5px 2px rgba(0,0,0,0.65)",
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
