import { useState } from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";


const MisReservas = () => {
  // Estado para almacenar las reservas
  const [reservas, setReservas] = useState([]);

  // Estado para gestionar el formulario de nueva reserva
  const [nuevaReserva, setNuevaReserva] = useState({
    tipoLegocar: "",
    circuito: "",
    fecha: "",
  });

  // Estado para gestionar la visibilidad del formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Función para manejar cambios en el formulario de nueva reserva
  const handleNuevaReservaChange = (e) => {
    const { name, value } = e.target;
    setNuevaReserva((prevReserva) => ({
      ...prevReserva,
      [name]: value,
    }));
  };

  // Función para manejar la creación de una nueva reserva
  const handleNuevaReservaSubmit = () => {
    // Aquí puedes realizar la lógica de almacenar la nueva reserva en tu backend
    // Por ahora, simplemente agregamos la nueva reserva al estado de reservas
    setReservas((prevReservas) => [...prevReservas, nuevaReserva]);

    // Limpiamos el formulario
    setNuevaReserva({
      tipoLegocar: "",
      circuito: "",
      fecha: "",
    });

    // Cerramos el formulario
    setMostrarFormulario(false);
  };

  return (
    <>
      <Box minWidth="25%" maxWidth="70%" justifyContent={"center"}>
        <Container
          style={{
            backgroundColor: "#D7D7D7",
            padding: "30px",
            borderRadius: "20px",
            marginTop: "30px",
            minWidth: "25vw",
            minHeight: "25vh",
          }}
        >
          {/* Botón para mostrar el formulario */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setMostrarFormulario(true)}
          >
            Nueva Reserva
          </Button>

          {/* Tabla de reservas */}
          <TableContainer
            component={Paper}
            sx={{
              margin: "20px 0",
              "& .MuiTableCell-root": { textAlign: "center" },
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Tipo de Legocar</TableCell>
                  <TableCell>Circuito</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservas.map((reserva, index) => (
                  <TableRow key={index}>
                    <TableCell>{reserva.fecha}</TableCell>
                    <TableCell>{reserva.tipoLegocar}</TableCell>
                    <TableCell>{reserva.circuito}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Formulario para nueva reserva */}
          <Dialog
            open={mostrarFormulario}
            onClose={() => setMostrarFormulario(false)}
          >
            <DialogTitle>Nueva Reserva</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="tipoLegocarLabel">
                      Tipo de Legocar
                    </InputLabel>
                    <Select
                      label="Tipo de Legocar"
                      labelId="tipoLegocarLabel"
                      id="tipoLegocar"
                      name="tipoLegocar"
                      value={nuevaReserva.tipoLegocar}
                      onChange={handleNuevaReservaChange}
                      style={{ borderColor: "#ffffff" }}
                    >
                      {/* Opciones para el tipo de legocar */}
                      <MenuItem value="formula1">Fórmula 1</MenuItem>
                      <MenuItem value="4x4">4x4</MenuItem>
                      <MenuItem value="nascar">Nascar</MenuItem>
                      <MenuItem value="rally">Rally</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Circuito"
                    fullWidth
                    name="circuito"
                    value={nuevaReserva.circuito}
                    onChange={handleNuevaReservaChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Fecha"
                    fullWidth
                    name="fecha"
                    value={nuevaReserva.fecha}
                    onChange={handleNuevaReservaChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNuevaReservaSubmit}
                  >
                    Reservar
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </>
  );
};

export default MisReservas;
