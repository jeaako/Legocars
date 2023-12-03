// HomeAyuntamiento.jsx
import React, { useState } from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';

const HomeAyuntamiento = () => {

  const [imagen1, setImagen1] = useState('../../resources/f1.jpg');
  const [imagen2, setImagen2] = useState('../../resources/rally.jpg');
  const [imagen3, setImagen3] = useState('../../resources/46-monster-vr46-kessel-ferrari.jpg');
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);

  const handleApproved1 = () => {
    setImagen1('../../resources/f1-approved.jpg');
    setVisible1(false);
  };

  const handleApproved2 = () => {
    setImagen2('../../resources/rally-approved.jpg');
    setVisible2(false);
  };

  const handleApproved3 = () => {
    setImagen3('../../resources/46-monster-vr46-kessel-ferrari-approved.jpg');
    setVisible3(false);
  };

  const handleRejected1 = () => {
    setImagen1('../../resources/f1-rejected.jpg');
    setVisible1(false);
  };

  const handleRejected2 = () => {
    setImagen2('../../resources/rally-rejected.jpg');
    setVisible2(false);
  };

  const handleRejected3 = () => {
    setImagen3('../../resources/46-monster-vr46-kessel-ferrari-rejected.jpg');
    setVisible3(false);
  };

  return (
    <div style={{ marginTop: '60px', maxWidth: '1200px', margin: '0 auto', marginBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ backgroundColor: '#ccc', padding: '90px', width: '100%' }}>
        <Grid container spacing={3} style={{ flexWrap: 'nowrap' }}>
          {/* Primer subpanel */}
          <Grid item xs={5}>
            <Paper style={{ backgroundColor: '#ddd', padding: '20px', display: 'flex', flexDirection: 'column' }}>
              {/* Imagen */}
              <img src={imagen1} alt="Imagen 1" style={{ width: '100%', marginBottom: '10px' }} />

              <Typography variant="h6" style={{ textAlign: 'left', fontWeight: 'bold', whiteSpace: 'nowrap', fontSize: '16px' }}>
                Campeonato Regional de Madrid
              </Typography>

              <Typography variant="body1" style={{ textAlign: 'left' }}>
                5 carreras
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'left' }}>
                Fecha: 15/12/2023
              </Typography>
              {visible1 && (<Grid item container spacing={2} style={{ marginTop: 0 }}>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'green', color: 'white' }} onClick={handleApproved1}>
                    Aceptar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'red', color: 'white' }} onClick={handleRejected1}>
                    Rechazar
                  </Button>
                </Grid>
              </Grid>)}
            </Paper>
          </Grid>

          {/* Segundo subpanel */}
          <Grid item xs={5}>
            <Paper style={{ backgroundColor: '#ddd', padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <img src={imagen2} alt="Imagen 2" style={{ width: '100%', marginBottom: '10px' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '16px' }}>
                Campeonato Regional de Asturias
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'left' }}>
                5 carreras
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'left' }}>
                Fecha: 1/12/2023
              </Typography>
              {visible2 && (<Grid item container spacing={2} style={{ marginTop: 0 }}>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'green', color: 'white' }} onClick={handleApproved2}>
                    Aceptar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'red', color: 'white' }} onClick={handleRejected2}>
                    Rechazar
                  </Button>
                </Grid>
              </Grid>)}
            </Paper>
          </Grid>

          {/* Tercer subpanel */}
          <Grid item xs={5}>
            <Paper style={{ backgroundColor: '#ddd', padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <img src={imagen3} alt="Imagen 3" style={{ width: '100%', marginBottom: '10px' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '16px' }}>
                Nascar Whelen Euro Series
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'left' }}>
                5 carreras
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'left' }}>
                Fecha: 19/12/2023
              </Typography>
              {visible3 && (<Grid item container spacing={2} style={{ marginTop: 0 }}>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'green', color: 'white' }} onClick={handleApproved3}>
                    Aceptar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth style={{ backgroundColor: 'red', color: 'white' }} onClick={handleRejected3}>
                    Rechazar
                  </Button>
                </Grid>
              </Grid>)}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomeAyuntamiento;

