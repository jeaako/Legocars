// Login.jsx
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useUser } from '../auth-routes/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useUser();
  
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role != 'noRole') {
      await loginUser(role);
      navigate(`/${role}`);
    } else {
      alert('Es necesario loguearse para acceder esta funcionalidad.');
      navigate(`/`);
    }
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al servidor
  };

  return (
    
    <Container maxWidth="sm" style={{backgroundColor: '#D7D7D7', padding: '30px', borderRadius:"20px" }}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#333333' }}>
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
          InputProps={{ style: { borderColor: '#ffffff' } }}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ style: { color: '#888' } }}
          InputProps={{ style: { borderColor: '#ffffff' } }}
        />
        <FormControl fullWidth margin="normal">
          
          <InputLabel id="role-label" style={{ color: '#888' }}>Rol</InputLabel>
          
          <Select
            label="Rol"
            labelId="role-label"
            id="role"
            value={role}
            onChange={handleChange}
            style={{ borderColor: '#ffffff' }}
            required
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


export default Login;

