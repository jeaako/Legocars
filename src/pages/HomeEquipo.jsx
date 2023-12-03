// HomeEquipo.jsx
import Typography from '@mui/material/Typography';
import Carrusel from '../components/Carrusel'
import '../App.css';

const HomeEquipo = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p className={`welcome-text ${'visible'}`} style={{ marginBottom: 25 }}>
          ¿Te gustaría formar parte de la competición? ¡Inscríbete ahora y vive la experiencia de conducir un legocar en carreras emocionantes! Consulta las fechas de los próximos campeonatos y prepárate para la acción.          
        </p>
        <Carrusel />
      </div>
    </>
  );
};

export default HomeEquipo;