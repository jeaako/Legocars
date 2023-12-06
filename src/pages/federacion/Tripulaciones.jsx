import { useState } from 'react';
import { Box, Container, Paper, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

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
        <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh" // Ajusta esto según tus necesidades
    minWidth="50vw"
  >
        <Container maxWidth="sm" display="flex"
        justifyContent="center"
        alignItems="center">
            <Paper elevation={3} style={{ padding: '30px', maxWidth: '500px', borderRadius: '20px', backgroundColor: '#D7D7D7', marginTop: '20px' }}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <FormControl fullWidth>
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
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleConsultarClick}
                            fullWidth
                        >
                            Consultar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {mostrarTripulaciones && (<Paper elevation={3} style={{ padding: '50px', maxWidth: '500px',  marginTop: '20px', marginBottom: '70px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
                <Grid container spacing={3} direction="column">
                    
                    {/* Primer subpanel */}
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

                    {/* Segundo subpanel */}
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

                    {/* Tercer subpanel */}
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
        </Container>
        </Box>
    );
}

export default Tripulaciones;


