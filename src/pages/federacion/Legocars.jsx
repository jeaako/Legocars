
import { Paper, Grid, Container, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Legocars = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {/* Panel izquierdo */}
                    <Grid item xs={6}>
                        <Paper style={{ padding: '20px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
                            <h2>AÑADIR LEGOCAR</h2>
                            <TextField label="Tipo" fullWidth margin="normal" />
                            <TextField label="Nº de serie" fullWidth margin="normal" />
                            <TextField label="Motor" fullWidth margin="normal" />
                            <TextField label="Ruedas" fullWidth margin="normal" />
                            <div style={{ marginTop: '10px' }}>
                            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                                Añadir
                            </Button>
                            <Button variant="contained" color="secondary">
                                Cancelar
                            </Button>
                            </div>
                        </Paper>
                    </Grid>

                    {/* Panel derecho */}
                    <Grid item xs={6}>
                        <Paper style={{ padding: '20px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
                            <h2>MODIFICAR/ELIMINAR LEGOCAR</h2>
                            <div style={{  justifyContent: 'space-between', marginBottom: '9px', marginTop: '35px' }}>
                                <FormControl style={{ width: '79%', marginRight: '8px' }}>
                                    <InputLabel id="tipo">Tipo</InputLabel>
                                    <Select
                                        variant="outlined"
                                        fullWidth
                                        labelId="tipo"
                                        id="tipo"
                                        label="tipo"
                                    >
                                        <MenuItem value="formula1">Fórmula 1</MenuItem>
                                        <MenuItem value="4x4">4x4</MenuItem>
                                        <MenuItem value="nascar">Nascar</MenuItem>
                                        <MenuItem value="rally">Rally</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" color="secondary" style={{ height: '55px' }}>
                                    Eliminar
                                </Button>
                            </div>
                            <TextField label="Nº de serie" fullWidth margin="normal" />
                            <TextField label="Motor" fullWidth margin="normal" />
                            <TextField label="Ruedas" fullWidth margin="normal" />
                            <div style={{ marginTop: '10px' }}>
                            <Button variant="contained" color="primary">
                                Modificar
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
                                Cancelar
                            </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Legocars;