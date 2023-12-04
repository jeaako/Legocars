import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Button,
  Container,
} from '@mui/material';

const Reservas = () => {
    const [boton1, setBoton1] = useState({ text: 'Confirmar', color: 'primary' });
    const [boton2, setBoton2] = useState({ text: 'Confirmar', color: 'primary' });
    const [boton3, setBoton3] = useState({ text: 'Confirmar', color: 'primary' });

    const handleConfirmar = (index) => {
        switch (index) {
            case 1:
                setBoton1({ text: 'Confirmada', color: 'success' });
                break;
            case 2:
                setBoton2({ text: 'Confirmada', color: 'success' });
                break;
            case 3:
                setBoton3({ text: 'Confirmada', color: 'success' });
                break;
            default:
                break;
        }
    }

    return (
        <Container maxWidth="md">
            {/* Panel principal gris claro */}
            <Paper elevation={3} style={{ padding: '50px', marginTop: '0px', marginBottom: '70px', backgroundColor: '#AFAFAF', borderRadius: '20px' }}>
                <Grid container spacing={3} direction="column">
                    <h2>MIS RESERVAS</h2>
                    {/* Primer subpanel */}
                    <Grid item container style={{ justifyContent: 'space-between' }}>
                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ backgroundColor: '#DBDBDB', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 10, marginRight: 'auto' }}>
                                    <Typography variant="body1" align="left" style={{ whiteSpace: 'nowrap', marginBottom: 5, fontWeight: 700 }}>
                                        Reserva 1
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Tipo: 4x4
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Ubicación: Los Ángeles de San Rafael
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Fecha: 5/01/2024
                                    </Typography>
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <Button
                                        variant="contained"
                                        color={boton1.color}
                                        onClick={() => handleConfirmar(1)}
                                    >
                                        {boton1.text}
                                    </Button>
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
                                        Reserva 2
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Tipo: Fórmula 1
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Ubicación: Circuito Fernando Alonso
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Fecha: 17/12/2023
                                    </Typography>
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <Button
                                        variant="contained"
                                        color={boton2.color}
                                        onClick={() => handleConfirmar(2)}
                                    >
                                        {boton2.text}
                                    </Button>
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
                                        Reserva 3
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Tipo: Nascar
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Ubicación: Circuit Ricardo Tormo
                                    </Typography>
                                    <Typography variant="body2" align="left" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                                        Fecha: 19/12/2023
                                    </Typography>
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <Button
                                        variant="contained"
                                        color={boton3.color}
                                        onClick={() => handleConfirmar(3)}
                                    >
                                        {boton3.text}
                                    </Button>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Reservas;