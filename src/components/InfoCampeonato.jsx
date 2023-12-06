import {
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';

import PropTypes from 'prop-types';

const InfoCampeonato = ({open, onClose}) => {

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

      const carrerasInfo = [...Array(5)].map((_, index) => ({
        carrera: index + 1,
        circuito: getRandomInt(1, 10),
        tipoCoche: getRandomCarType(),
        fecha: getRandomDate(),
      }));


    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{
            style: {
                textAlign: 'center',
                backgroundColor: '#D7D7D7', 
                borderRadius: '20px',   
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
                    {carrerasInfo.map((raceInfo, index) => (
                        <Grid item container spacing={2} key={index}>
                            <Grid item xs={3}>
                                <Typography variant="body2">
                                    Carrera {raceInfo.carrera}
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
    );
}

InfoCampeonato.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default InfoCampeonato;