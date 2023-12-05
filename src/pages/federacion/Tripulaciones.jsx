import React, { useState } from 'react';
import { Container, Paper, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField} from '@mui/material';

const Tripulaciones = () => {
    const [selectedCampeonato, setSelectedCampeonato] = useState('');
    const [selectedCarrera, setSelectedCarrera] = useState('');
    const [mostrarTripulaciones, setMostrarTripulaciones] = useState(false);

    const handleConsultarClick = () => {
        if (selectedCampeonato != '' && selectedCarrera!= ''){
            setMostrarTripulaciones(true);
        }
    };

    return (
        <>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item>
                    <Container maxWidth="sm" style={{ backgroundColor: '#D7D7D7', padding: '30px', borderRadius: "20px", marginTop: '30px', width: '400px' }}>
                        <h2 style={{ color: 'black' }}>TRIPULACIONES</h2>
                        <form>
                            <FormControl fullWidth style={{ marginBottom: '10px' }}>
                                <InputLabel id="campeonato">Campeonato</InputLabel>
                                <Select
                                    value={selectedCampeonato}
                                    onChange={(e) => setSelectedCampeonato(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                    labelId="campeonato"
                                    id="campeonato"
                                    label="Campeonato"
                                >
                                    <MenuItem value="campeonato1">Campeonato 1</MenuItem>
                                    <MenuItem value="campeonato2">Campeonato 2</MenuItem>
                                    <MenuItem value="campeonato3">Campeonato 3</MenuItem>
                                    <MenuItem value="campeonato4">Campeonato 4</MenuItem>
                                    <MenuItem value="campeonato5">Campeonato 5</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="carrera">Carrera</InputLabel>
                                <Select
                                    value={selectedCarrera}
                                    onChange={(e) => setSelectedCarrera(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                    labelId="carrera"
                                    id="carrera"
                                    label="Carrera"
                                >
                                    <MenuItem value="carrera1">Carrera 1</MenuItem>
                                    <MenuItem value="carrera2">Carrera 2</MenuItem>
                                    <MenuItem value="carrera3">Carrera 3</MenuItem>
                                    <MenuItem value="carrera4">Carrera 4</MenuItem>
                                    <MenuItem value="carrera5">Carrera 5</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" color="primary" fullWidth style={{ marginBottom: 20, marginTop: 10 }} onClick={handleConsultarClick}>
                                CONSULTAR
                            </Button>
                        </form>

                    </Container>

                    {mostrarTripulaciones && (<Paper elevation={3} style={{ padding: '50px', maxWidth: '500px', marginTop: '30px', marginBottom: '40px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
                        <Grid container spacing={3} direction="column">


                            <Grid item container style={{ justifyContent: 'space-between' }}>
                                <Grid item xs={12}>
                                    <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10, marginRight: 'auto' }}>
                                            <Typography variant="body1" align="left" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                Tripulación 1
                                            </Typography>
                                            <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                Manolo y Pepe
                                            </Typography>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>


                            <Grid item container style={{ justifyContent: 'space-between' }}>
                                <Grid item xs={12}>
                                    <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10, marginRight: 'auto' }}>
                                            <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                Tripulación 2
                                            </Typography>
                                            <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                John y José
                                            </Typography>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>


                            <Grid item container style={{ justifyContent: 'space-between' }}>
                                <Grid item xs={12}>
                                    <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10, marginRight: 'auto' }}>
                                            <Typography variant="body1" align="center" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                                Tripulación 3
                                            </Typography>
                                            <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                                Josema y Luisito
                                            </Typography>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>)}
                </Grid>
            </Grid>
        </>

    );
}

export default Tripulaciones;


