import React, { useState, useRef, useEffect } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Container,
  Button,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  FormLabel, 
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import InfoCampeonato from '../../components/InfoCampeonato';

const Campeonatos = () => {

    const [pagina1, setPagina1] = useState(true);
    const [index, setIndex] = useState(0);
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const [visible4, setVisible4] = useState(true);
    const [visible5, setVisible5] = useState(true);
    const [visible6, setVisible6] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showRaceInfo, setShowRaceInfo] = useState(false);

    const formRef = useRef(null);

    const handleCloseRaceInfo = () => {
        setShowRaceInfo(false);
    };

    const handleInfoClick = () => {
        setShowRaceInfo(true);
    };

    const handlePrev = () => {
        setPagina1(true);
    }

    const handleNext = () => {
        setPagina1(false);
    }

    const handleInscripcionClick = (index) => {
        setIndex(index);
        setShowForm(true);
    }

    const handleAceptarInscripcion = () => {
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
            case 4:
                setVisible4(false);
                break;
            case 5:
                setVisible5(false);
                break;
            case 6:
                setVisible6(false);
                break;
            default:
                break;
        }
        setShowForm(false);
    }

    useEffect(() => {
        if (showForm && formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [showForm]);

    return (
        <>
            <Container maxWidth="md" style={{ marginTop: '50px' }}>
                {/* Panel principal gris claro */}
                <Paper elevation={3} style={{ padding: '30px', marginTop: '0px', marginBottom: '70px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
                    <Grid container spacing={3} direction="column">
                        <h2>CAMPEONATOS</h2>
                        {/* Primer subpanel */}
                        <Grid item container>
                            <Grid item xs={12}>
                                <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: 'auto' }}>
                                        {pagina1 ? (<>
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
                                        </>) : (<>
                                            <img src="../../resources/4x4(2).jpg" alt="Imagen 1" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                                                <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                    Copa Pistón
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    6 carreras
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    Fecha: 18/12/2023
                                                </Typography>
                                            </div>
                                        </>)}

                                    </div>
                                    <div style={{ marginTop: 30, marginRight: 5 }}>
                                        {pagina1 && visible1 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(1)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        {!pagina1 && visible4 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(4)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ marginLeft: 10 }}
                                            onClick={handleInfoClick}
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
                                        {pagina1 ? (<>
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
                                        </>) : (<>
                                            <img src="../../resources/nascar(2).jpg" alt="Imagen 2" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                                                <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                    Copa Konami
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    7 carreras
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    Fecha: 9/02/2024
                                                </Typography>
                                            </div>
                                        </>)}

                                    </div>
                                    <div style={{ marginTop: 30, marginRight: 5 }}>
                                        {pagina1 && visible2 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(2)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        {!pagina1 && visible5 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(5)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ marginLeft: 10 }}
                                            onClick={handleInfoClick}
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
                                        {pagina1 ? (<>
                                            <img src="../../resources/4x4.jpg" alt="Imagen 3" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                                                <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                    Nascar Whelen Euro Series
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    5 carreras
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    Fecha: 1/04/2024
                                                </Typography>
                                            </div>
                                        </>) : (<>
                                            <img src="../../resources/46-monster-vr46-kessel-ferrari.jpg" alt="Imagen 3" style={{ width: '150px', height: '100px', marginRight: '10px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10 }}>
                                                <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                    Copa PES
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    5 carreras
                                                </Typography>
                                                <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                    Fecha: 7/05/2024
                                                </Typography>
                                            </div>
                                        </>)}

                                    </div>
                                    <div style={{ marginTop: 30, marginRight: 5 }}>
                                        {pagina1 && visible3 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(3)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        {!pagina1 && visible6 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleInscripcionClick(6)}
                                            >
                                                Inscripción
                                            </Button>)}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ marginLeft: 10 }}
                                            onClick={handleInfoClick}
                                        >
                                            Info
                                        </Button>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        {/*Botones de pasar página */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                            <IconButton onClick={handlePrev} style={{ marginRight: '5px' }}>
                                <NavigateBeforeIcon />
                            </IconButton>

                            <IconButton onClick={handleNext} style={{ marginLeft: '5px' }}>
                                <NavigateNextIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Paper>

                {showRaceInfo && (<InfoCampeonato open={showRaceInfo} onClose={handleCloseRaceInfo} />)}


                {/*Panel de incripción*/}

                {showForm && (
                    <div ref={formRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Paper style={{ padding: '20px', marginTop: '20px', marginBottom: '70px', backgroundColor: '#D7D7D7', borderRadius: '20px', maxWidth: '500px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h2>Tripulación</h2>
                                    <TextField label="Email" fullWidth margin="normal" />
                                    <TextField label="Código Postal" fullWidth margin="normal" />
                                </Grid>

                                <Grid item xs={12}>
                                    <h2>Piloto Senior</h2>
                                    <TextField label="Nombre" fullWidth margin="normal" />
                                    <TextField label="Fecha de Nacimiento" fullWidth margin="normal" />
                                    <TextField label="Nickname" fullWidth margin="normal" />

                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">¿Está desempleado?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>

                                    <Typography variant="body1">Tipos de legocar que puede pilotar:</Typography>
                                    <FormControl component="fieldset">
                                        <RadioGroup row>
                                            <FormControlLabel value="formula1" control={<Radio />} label="Fórmula 1" />
                                            <FormControlLabel value="4x4" control={<Radio />} label="4x4" />
                                            <FormControlLabel value="nascar" control={<Radio />} label="Nascar" />
                                            <FormControlLabel value="rally" control={<Radio />} label="Rally" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <h2>Piloto Junior</h2>
                                    <TextField label="Nombre" fullWidth margin="normal" />
                                    <TextField label="Fecha de Nacimiento" fullWidth margin="normal" />
                                    <TextField label="Nickname" fullWidth margin="normal" />

                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">¿Está desempleado?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="si" control={<Radio />} label="Sí" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>

                                    <Typography variant="body1">Tipos de legocar que puede pilotar:</Typography>
                                    <FormControl component="fieldset">
                                        <RadioGroup row>
                                            <FormControlLabel value="formula1" control={<Radio />} label="Fórmula 1" />
                                            <FormControlLabel value="4x4" control={<Radio />} label="4x4" />
                                            <FormControlLabel value="nascar" control={<Radio />} label="Nascar" />
                                            <FormControlLabel value="rally" control={<Radio />} label="Rally" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" style={{ marginRight: '7px' }} onClick={handleAceptarInscripcion}>
                                        Aceptar
                                    </Button>
                                    <Button variant="contained" color="secondary" style={{ marginLeft: '7px' }} onClick={() => setShowForm(false)}>
                                        Cancelar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                )}


            </Container>
        </>
    );
}

export default Campeonatos;