// HomeAsistente.jsx
import React from 'react';
import Header from './components/HeaderAsistAyun';
import Footer from './components/Footer';

const HomeAsistente = () => {
  return (
    <>
      <Header/>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5">Estás en el home asistente</Typography>
      </div>

      <Footer />
    </>
  );
};

export default HomeAsistente;
