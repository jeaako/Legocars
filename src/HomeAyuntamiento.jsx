// HomeAyuntamiento.jsx
import React from 'react';
import Header from './components/HeaderAsistAyun';
import Footer from './components/Footer';

const HomeAyuntamiento = () => {
  return (
    <>
      <Header/>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5">Estás en el home ayuntamiento</Typography>
      </div>

      <Footer />
    </>
  );
};

export default HomeAyuntamiento;