// HomeEquipo.jsx
import Header from '../components/HeaderEquipo';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';

const HomeEquipo = () => {
  return (
    <>
      <Header/>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5">Estás en el home equipo</Typography>
      </div>

      <Footer />
    </>
  );
};

export default HomeEquipo;