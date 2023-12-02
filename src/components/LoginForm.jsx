// LoginForm.jsx
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import PropTypes from 'prop-types';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (role) {
      case 'federacion':
        navigate('/federacion');
        break;
      case 'ayuntamiento':
        navigate('/ayuntamiento');
        break;
        case 'equipo':
          navigate('/equipo');
        break;
      case 'asistente':
        navigate('/asistente');
        break;
      // Agrega más casos según sea necesario
      default:
        break;
    }
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al servidor
    onClose(); // Cierra el formulario después del envío del formulario
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre de Usuario"
          type="text"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputLabelProps={{ style: { color: '#888' } }}
          InputProps={{ style: { color: '#ffffff', borderColor: '#ffffff' } }}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ style: { color: '#888' } }}
          InputProps={{ style: { color: '#ffffff', borderColor: '#ffffff' } }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label" style={{ color: '#888' }}>Rol</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={role}
            onChange={handleChange}
            style={{ color: '#ffffff', borderColor: '#ffffff' }}
          >
            <MenuItem value="federacion">Federación</MenuItem>
            <MenuItem value="ayuntamiento">Ayuntamiento</MenuItem>
            <MenuItem value="equipo">Equipo</MenuItem>
            <MenuItem value="asistente">Asistente</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{marginBottom: 20, marginTop: 10}}>
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
