// HomeEquipo.jsx
import React from 'react';
import Header from './components/HeaderEquipo';
import Footer from './components/Footer';

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