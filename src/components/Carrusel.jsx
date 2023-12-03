import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const images = [
  '../../resources/f1.jpg',
  '../../resources/f1(2).jpg',
  '../../resources/46-monster-vr46-kessel-ferrari.jpg',
  '../../resources/rally.jpg',
  '../../resources/nascar.jpg',
  '../../resources/4x4.jpg',
  '../../resources/nascar(2).jpg',
  '../../resources/4x4(2).jpg',
];

const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: 30 }}>
      <Paper style={{ padding: '20px'/*, backgroundColor: 'grey'*/, borderRadius: '20px' }}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          style={{ width: '100%', height: '400px', objectFit: 'cover', marginBottom: '20px' }}
        />

        <IconButton onClick={handlePrev} disabled={currentImage === 0} style={{ marginRight: '10px' }}>
          <NavigateBeforeIcon />
        </IconButton>

        <IconButton onClick={handleNext} disabled={currentImage === images.length - 1}>
          <NavigateNextIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Carrusel;

