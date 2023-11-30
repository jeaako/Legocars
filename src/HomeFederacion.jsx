// HomeFederacion.jsx
import React from 'react';
import Header from './components/HeaderFed';
import Footer from './components/Footer';

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