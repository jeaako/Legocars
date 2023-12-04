// HomeFederacion.jsx
import Carrusel from '../components/Carrusel'
import '../App.css';

const HomeFederacion = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p className={`welcome-text ${'visible'}`} style={{ marginBottom: 25 }}>
        ¡Bienvenido a Radiador Spring! Aquí, las emocionantes competiciones de legocars toman vida, y tú, como federación, tienes el poder de organizar eventos únicos y apasionantes.          
        </p>
        <Carrusel />
      </div>
    </>
  );
};

export default HomeFederacion;