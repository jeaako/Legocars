// Facturas.jsx
import { useState } from 'react';
import '../../App.css';
import {
  Typography,
  Grid,
  Paper,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormLabel,
} from '@mui/material';

import InfoCampeonato from '../../components/InfoCampeonato';

const Facturas = () => {
  const [abrirDialogPagarFactura, setabrirDialogPagarFactura] = useState(false);
  
  const [index, setIndex] = useState(0);
  const [boton1, setBoton1] = useState({ texto: 'PAGAR', color: 'primary', desactivado: false });
  const [boton2, setBoton2] = useState({ texto: 'PAGAR', color: 'primary', desactivado: false });
  const [boton3, setBoton3] = useState({ texto: 'PAGAR', color: 'primary', desactivado: false });

  const [showRaceInfo, setShowRaceInfo] = useState(false);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [ totalPagar ] = useState(getRandomInt(1000, 2000));


  const handleCloseDialog = () => {
    setabrirDialogPagarFactura(false);
  };

  const handleCompraEntradaClick1 = () => {
    setIndex(1);
    setabrirDialogPagarFactura(true);
  };

  const handleCompraEntradaClick2 = () => {
    setIndex(2);
    setabrirDialogPagarFactura(true);
  };

  const handleCompraEntradaClick3 = () => {
    setIndex(3);
    setabrirDialogPagarFactura(true);
   
  };

  const handlePagarClick = () => {
    switch (index) {
      case 1:
        setBoton1({ texto: 'PAGADO', color: 'success', desactivado: true });
        break;
      case 2:
        setBoton2({ texto: 'PAGADO', color: 'success', desactivado: true });
        break;
      case 3:
        setBoton3({ texto: 'PAGADO', color: 'success', desactivado: true });
        break;
  
      default:
        break;
    }
    handleCloseDialog();
  };

  const handleInfoClick = () => {
    setShowRaceInfo(true);
  };

  const handleCloseRaceInfo = () => {
    setShowRaceInfo(false);
  };

  return (
    <>
      <Container maxWidth="md">

        {/* Panel principal gris claro */}
        <Paper elevation={3} style={{ padding: '30px', marginTop: '0px', marginBottom: '70px', backgroundColor: '#AFAFAF', borderRadius: '20px' }}>
          <Grid container spacing={3} direction="column">
            <h2>PAGAR FACTURAS</h2>
            {/* Primer subpanel */}
            <Grid item container>
              <Grid item xs={12}>
                <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 'auto' }}>
                    <img src="../../resources/f1.jpg" alt="Imagen 1" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                      <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                        Campeonato Regional de Madrid
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        5 carreras
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        Fecha: 15/12/2023
                      </Typography>
                    </div>
                  </div>
                  <div style={{ marginTop: 30, marginRight: 5 }}>
                    <Button
                      variant="contained"
                      color={boton1.color}
                      disabled={boton1.desactivado}
                      onClick={handleCompraEntradaClick1}
                    >
                        {boton1.texto}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                      onClick={() => handleInfoClick(1)}
                    >
                      Info
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>

            {/* Segundo subpanel */}
            <Grid item container>
              <Grid item xs={12}>
                <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 'auto' }}>
                    <img src="../../resources/nascar.jpg" alt="Imagen 2" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                      <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                        Campeonato Regional de Asturias
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        5 carreras
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        Fecha: 1/12/2023
                      </Typography>
                    </div>
                  </div>
                  <div style={{ marginTop: 30, marginRight: 5 }}>
                    <Button
                      variant="contained"
                      color={boton2.color}
                      disabled={boton2.desactivado}
                      onClick={handleCompraEntradaClick2}
                    >
                       {boton2.texto}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                      onClick={() => handleInfoClick(2)}
                    >
                      Info
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>

            {/* Tercer subpanel */}
            <Grid item container>
              <Grid item xs={12}>
                <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 'auto' }}>
                    <img src="../../resources/4x4.jpg" alt="Imagen 3" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                      <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                        Nascar Whelen Euro Series
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        5 carreras
                      </Typography>
                      <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                        Fecha: 19/12/2023
                      </Typography>
                    </div>
                  </div>
                  <div style={{ marginTop: 30, marginRight: 5 }}>
                    <Button
                      variant="contained"
                      color={boton3.color}
                      disabled={boton3.desactivado}
                      onClick={handleCompraEntradaClick3}
                    >
                       {boton3.texto}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                      onClick={() => handleInfoClick(3)}
                    >
                      Info
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* Diálogo de pagar factura */}
        <Dialog open={abrirDialogPagarFactura} onClose={handleCloseDialog} maxWidth="xs" fullWidth PaperProps={{
          style: {
            backgroundColor: '#D7D7D7', // color gris
            borderRadius: '20px',   // bordes redondeados
          },
        }}>
          <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Pasarela de Pago</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2} direction="column">
                <Grid item>               
                  <FormLabel>Total a pagar: {totalPagar}€</FormLabel>
                </Grid>
                <Grid item>
                  <TextField label="Número de cuenta" fullWidth style={{ fontSize: '14px' }} />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={handlePagarClick}>
                      Pagar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="secondary" fullWidth onClick={handleCloseDialog}>
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>

        {/* Panel de información de la carrera */}
        {showRaceInfo && (<InfoCampeonato open={showRaceInfo} onClose={handleCloseRaceInfo} />)}


      </Container>
    </>
  );
};

export default Facturas;

