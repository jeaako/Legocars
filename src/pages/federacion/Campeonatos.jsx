import { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Campeonatos = () => {
    const [index, setIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [icon1, setIcon1] = useState(<AddIcon />);
    const [icon2, setIcon2] = useState(<AddIcon />);
    const [icon3, setIcon3] = useState(<AddIcon />);
    const [icon4, setIcon4] = useState(<AddIcon />);
    const [icon5, setIcon5] = useState(<AddIcon />);
    const [icon6, setIcon6] = useState(<AddIcon />);
    const [icon7, setIcon7] = useState(<AddIcon />);
    const [icon8, setIcon8] = useState(<AddIcon />);
    const [visible6, setVisible6] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [visible8, setVisible8] = useState(false);

    const handleClick = (index) => {
        setIndex(index);
        setShowForm(true);
    };

    const handleCrearCarrera = () => {
        switch (index) {
            case 1:
                setIcon1(<TaskAltIcon />)
                break;
            case 2:
                setIcon2(<TaskAltIcon />)
                break;
            case 3:
                setIcon3(<TaskAltIcon />)
                break;
            case 4:
                setIcon4(<TaskAltIcon />)
                break;
            case 5:
                setIcon5(<TaskAltIcon />)
                setVisible6(true);
                break;
            case 6:
                setIcon6(<TaskAltIcon />)
                setVisible7(true);
                break;
            case 7:
                setIcon7(<TaskAltIcon />)
                setVisible8(true);
                break;
            case 8:
                setIcon8(<TaskAltIcon />)
                break;

            default:
                break;
        }
        setIndex(0);
        setShowForm(false);
    }

  return (
    <>
      <Paper style={{ padding: '20px', backgroundColor: '#D7D7D7', borderRadius: '20px' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          SOLICITUD DE CAMPEONATO
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nombre del Campeonato" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type="date" variant="outlined" />
          </Grid>
        </Grid>

        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 7 }}>
            <Typography>Carrera 1</Typography>
            <IconButton onClick={() => handleClick(1)}>
              {icon1}
            </IconButton>
          </div>

          <div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 2</Typography>
            <IconButton onClick={() => handleClick(2)}>
              {icon2}
            </IconButton>
          </div>

          <div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 3</Typography>
            <IconButton onClick={() => handleClick(3)}>
              {icon3}
            </IconButton>
          </div>

          <div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 4</Typography>
            <IconButton onClick={() => handleClick(4)}>
              {icon4}
            </IconButton>
          </div>

          <div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 5</Typography>
            <IconButton onClick={() => handleClick(5)}>
              {icon5}
            </IconButton>
          </div>

          {visible6 && (<div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 6</Typography>
            <IconButton onClick={() => handleClick(6)}>
              {icon6}
            </IconButton>
          </div>)}

          {visible7 && (<div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 7</Typography>
            <IconButton onClick={() => handleClick(7)}>
              {icon7}
            </IconButton>
          </div>)}

          {visible8 && (<div style={{ display: 'flex', marginBottom: 7, alignItems: 'center' }}>
            <Typography>Carrera 8</Typography>
            <IconButton onClick={() => handleClick(8)}>
              {icon8}
            </IconButton>
          </div>)}

        </div>

        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Enviar Solicitud
        </Button>


      </Paper>

      <Dialog open={showForm} onClose={() => setShowForm(false)} maxWidth="xs" fullWidth PaperProps={{
        style: {
          backgroundColor: '#D7D7D7',
          borderRadius: '20px',
        },
      }}>
        <DialogTitle>
          <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            NUEVA CARRERA
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="tipoCocheLabel">Tipo de Coche</InputLabel>
                  <Select labelId="tipoCocheLabel" id="tipoCoche" label="Tipo de Coche">
                    <MenuItem value="4x4">4x4</MenuItem>
                    <MenuItem value="F1">F1</MenuItem>
                    <MenuItem value="nascar">Nascar</MenuItem>
                    <MenuItem value="rally">Rally</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Ubicación" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth type="date" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Número de Asistentes" fullWidth type="number" variant="outlined" />
              </Grid>
            </Grid>

            <Grid item container spacing={2} style={{ marginTop: '5px' }}>
              <Grid item xs={6} >
                <Button variant="contained" color="primary" fullWidth onClick={handleCrearCarrera}>
                  Aceptar
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" fullWidth onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Campeonatos;

