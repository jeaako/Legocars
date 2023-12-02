import { useNavigate } from 'react-router-dom';
import { useUser } from '../auth-routes/UserContext';
import Button from '@mui/material/Button';

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
    <div>
      <h2>¿Quieres cerrar sesión?</h2>
      <Button variant="contained" color="primary" onClick={handleYesClick}>Sí</Button>
      <Button variant="contained" color="secondary" onClick={handleNoClick}>No</Button>
    </div>
  );
}

export default Logout;