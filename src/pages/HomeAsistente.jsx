// HomeAsistente.jsx
import { useState } from 'react';
import '../App.css';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const HomeAsistente = () => {
  const [abrirDialogComprarEntrada, setabrirDialogComprarEntrada] = useState(false);
  const [abrirDialogValorar, setabrirDialogValorar] = useState(false);
  const [numEntradas, setNumEntradas] = useState('');
  const [boton1, setBoton1] = useState("Comprar entrada");
  const [boton2, setBoton2] = useState("Comprar entrada");
  const [boton3, setBoton3] = useState("Comprar entrada");
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);
  const [index, setIndex] = useState(0);
  const [tripulacion, setTripulacion] = useState('');
  const [pericia, setPericia] = useState('0');
  const [originalidad, setOriginalidad] = useState('0');
  const [riesgo, setRiesgo] = useState('0');
  const [comentario, setComentario] = useState('');
  const [showRaceInfo, setShowRaceInfo] = useState(false);
  const [raceInfo, setRaceInfo] = useState({
    circuito: 0,
    tipoCoche: '',
    fecha: '',
  });

  const handleCloseDialog = () => {
    setabrirDialogComprarEntrada(false);
    setNumEntradas(0);
  };

  const handleCloseDialogValorarAceptar = () => {
    setabrirDialogComprarEntrada(false);
    switch (index) {
      case 1:
        setVisible1(false);
        break;
      case 2:
        setVisible2(false);
        break;
      case 3:
        setVisible3(false);
        break;

      default:
        break;
    }
    setabrirDialogValorar(false);
    setTripulacion('');
    setPericia('0');
    setOriginalidad('0');
    setRiesgo('0');
    setComentario('');
  }

  const handleCloseDialogValorarCancelar = () => {
    setabrirDialogComprarEntrada(false);
    setabrirDialogValorar(false);
    setTripulacion('');
    setPericia('0');
    setOriginalidad('0');
    setRiesgo('0');
    setComentario('');
  }

  const handleCompraEntradaClick1 = () => {
    setIndex(1);
    if (boton1 == "Comprar entrada"){
      setabrirDialogComprarEntrada(true);
    } else if (boton1 == "valorar") {
      setabrirDialogValorar(true);
    }
    
  };

  const handleCompraEntradaClick2 = () => {
    setIndex(2);
    if (boton2 == "Comprar entrada"){
      setabrirDialogComprarEntrada(true);
    } else if (boton2 == "valorar") {
      setabrirDialogValorar(true);
    }
    setabrirDialogComprarEntrada(true);
  };

  const handleCompraEntradaClick3 = () => {
    setIndex(3);
    if (boton3 == "Comprar entrada"){
      setabrirDialogComprarEntrada(true);
    } else if (boton3 == "valorar") {
      setabrirDialogValorar(true);
    }
    setabrirDialogComprarEntrada(true);
  };

  const handlePagarClick = () => {
    switch (index) {
      case 1:
        setBoton1("valorar");
        break;
      case 2:
        setBoton2("valorar");
        break;
      case 3:
        setBoton3("valorar");
        break;

      default:
        break;
    }
    handleCloseDialog();
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomCarType = () => {
    const carTypes = ['4x4', 'Nascar', 'F1'];
    const randomIndex = getRandomInt(0, carTypes.length - 1);
    return carTypes[randomIndex];
  };

  const getRandomDate = () => {
    const day = getRandomInt(1, 28);
    const month = getRandomInt(1, 12);
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/2024`;
  };

  const handleInfoClick = () => {
    actualizarInfoCarrera();
    setShowRaceInfo(true);
  };

  const actualizarInfoCarrera = () => {
    setRaceInfo({
      circuito: getRandomInt(1, 10),
      tipoCoche: getRandomCarType(),
      fecha: getRandomDate(),
    });
  };

  const handleCloseRaceInfo = () => {
    setShowRaceInfo(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <div className="card">
          <p className={`welcome-text ${'visible'}`}>
            Sumérgete en la rica historia de las competiciones de legocars en nuestro querido municipio. Desde las primeras carreras hasta la modernización de la tecnología, cada evento es una parte única de nuestra tradición. ¿A qué esperas para comprar tu entrada?
          </p>
        </div>

        {/* Panel principal gris claro */}
        <Paper elevation={3} style={{ padding: '30px', marginTop: '0px', marginBottom: '70px', backgroundColor: '#AFAFAF', borderRadius: '20px' }}>
          <Grid container spacing={3} direction="column">
            <h2>CAMPEONATOS</h2>
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
                    {visible1 && (<Button
                      variant="contained"
                      color="primary"
                      onClick={handleCompraEntradaClick1}
                    >
                      {boton1}
                    </Button>)}
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
                    {visible2 && (<Button
                      variant="contained"
                      color="primary"
                      onClick={handleCompraEntradaClick2}
                    >
                      {boton2}
                    </Button>)}
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
                    {visible3 && (<Button
                      variant="contained"
                      color="primary"
                      onClick={handleCompraEntradaClick3}
                    >
                      {boton3}
                    </Button>)}
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

        {/* Diálogo de compra de entrada */}
        <Dialog open={abrirDialogComprarEntrada} onClose={handleCloseDialog} maxWidth="xs" fullWidth PaperProps={{
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
                  <FormControl fullWidth>
                  <InputLabel id="numEntradasLabel">Nº de entradas</InputLabel>
                    <Select
                      labelId="numEntradasLabel"
                      id="numEntradas"
                      value={numEntradas}
                      label="Nº entradas"
                      onChange={(e) => setNumEntradas(e.target.value)}
                      style={{ fontSize: '14px' }}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField label="Número de cuenta" fullWidth style={{ fontSize: '14px' }} />
                </Grid>
                <Grid item style={{ marginBottom: '10px' }}>
                  <Typography variant="body2">A pagar: {(10 * numEntradas).toFixed(2)}€</Typography>
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

        {/*Dialogo para valorar el campeonato*/}
        <Dialog open={abrirDialogValorar} onClose={handleCloseDialogValorarCancelar} maxWidth="xs" fullWidth PaperProps={{
          style: {
            backgroundColor: '#D7D7D7', // color gris
            borderRadius: '20px',   // bordes redondeados
          },
        }}>
          <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Valoración del campeonato</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel id="tripulacionLabel">Tripulación</InputLabel>
                    <Select
                      labelId="tripulacionLabel"
                      id="tripulacion"
                      value={tripulacion}
                      label="Tripulación"
                      onChange={(e) => setTripulacion(e.target.value)}
                      style={{ fontSize: '14px' }}
                    >
                      <MenuItem value="tripulacion1">Tripulación 1</MenuItem>
                      <MenuItem value="tripulacion2">Tripulación 2</MenuItem>
                      <MenuItem value="tripulacion3">Tripulación 3</MenuItem>
                      <MenuItem value="tripulacion4">Tripulación 4</MenuItem>
                      <MenuItem value="tripulacion5">Tripulación 5</MenuItem>
                      <MenuItem value="tripulacion6">Tripulación 6</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Pericia</Typography>
                  <RadioGroup
                    row
                    value={pericia}
                    onChange={(e) => setPericia(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Originalidad</Typography>
                  <RadioGroup
                    row
                    value={originalidad}
                    onChange={(e) => setOriginalidad(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Riesgo</Typography>
                  <RadioGroup
                    row
                    value={riesgo}
                    onChange={(e) => setRiesgo(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
                <Grid item>
                  <TextField
                    label="Comentario (max 80 caracteres)"
                    fullWidth
                    multiline
                    rows={2}
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                  />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleCloseDialogValorarAceptar}>
                      Aceptar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="secondary" fullWidth onClick={handleCloseDialogValorarCancelar}>
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>

        {/* Panel de información de la carrera */}
        <Dialog open={showRaceInfo} onClose={handleCloseRaceInfo} maxWidth="md" fullWidth PaperProps={{
          style: {
            backgroundColor: '#D7D7D7', // color gris
            borderRadius: '20px',   // bordes redondeados
          },
        }}>
          <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Información del Campeonato</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} direction="column">
              <Grid item container spacing={2}>
                <Grid item xs={3}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Carrera
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Circuito
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Tipo de Coche
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    Fecha
                  </Typography>
                </Grid>
              </Grid>
              {[...Array(5)].map((_, index) => (
                //actualizarInfoCarrera();
                <Grid item container spacing={2} key={index}>
                  <Grid item xs={3}>
                    <Typography variant="body2">
                      Carrera {index + 1}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <Typography variant="body2">
                    {`Circuito ${raceInfo.circuito}`}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2">
                    {raceInfo.tipoCoche}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2">
                    {`Fecha ${raceInfo.fecha}`}
                  </Typography>
                </Grid>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>


      </Container>
    </>
  );
};

export default HomeAsistente;

