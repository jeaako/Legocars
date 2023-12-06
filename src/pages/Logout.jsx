import { useNavigate } from 'react-router-dom';
import { useUser } from '../auth-routes/UserContext';
import {Box, Container, Button} from '@mui/material';

function Logout() {
  const navigate = useNavigate();
  const { userRole, logoutUser } = useUser();

  const handleYesClick = () => {
    // Aquí puedes agregar lógica para cerrar la sesión del usuario
    logoutUser();
    navigate('/login');
  };

  const handleNoClick = () => {
    navigate(`/${userRole}`);
  };

  return (
    <Box>
      <Container maxWidth="sm" style={{backgroundColor: '#D7D7D7', padding: '30px', borderRadius:"20px", border:"5px", color:"black", margin:"10px 10px"}}>
      <h2>¿Seguro que quieres cerrar sesión?</h2>
      <Button
      style = {{margin: "5px 5px"}}
      variant="contained" color="primary" onClick={handleYesClick}>Sí</Button>
      <Button  
      style = {{margin: "5px 5px"}} 
      variant="contained" color="secondary" onClick={handleNoClick}>No</Button>
      </Container>
    </ Box>
  );
}

export default Logout;