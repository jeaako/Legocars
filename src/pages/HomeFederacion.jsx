// HomeFederacion.jsx

import Header from '../components/HeaderFed';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';

const HomeFederacion = () => {
  return (
    <>
      <Header/>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5">Estás en el home federación</Typography>
      </div>

      <Footer />
    </>
  );
};

export default HomeFederacion;