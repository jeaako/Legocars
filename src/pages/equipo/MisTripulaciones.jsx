import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MisTripulaciones = () => {

    const tripulaciones = [
    { name: 'Tripulación 1', pilot1: 'Pepe', pilot2: 'Manolo', championship: 'Copa Pistón' },
    { name: 'Tripulación 2', pilot1: 'Ricardo', pilot2: 'Andrés', championship: 'Copa Konami' },
    { name: 'Tripulación 3', pilot1: 'Joaquín', pilot2: 'Juan', championship: 'Copa Rayo' },
    { name: 'Tripulación 4', pilot1: 'Ernesto', pilot2: 'Pablo', championship: 'Copa Estrella' },
    ];

    return (
    <Box maxWidth="75%" >
        <TableContainer component={Paper} style={{ borderRadius: '20px'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
                <TableRow style={{ backgroundColor: '#ffe591'}}>
                <TableCell>Nombre de la tripulación</TableCell>
                <TableCell align="right">Piloto 1</TableCell>
                <TableCell align="right">Piloto 2</TableCell>
                <TableCell align="right">Campeonato</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tripulaciones.map((crew) => (
                <TableRow key={crew.name} style={{ paddingBottom:'30px' }}>
                    <TableCell component="th" scope="row">
                    {crew.name}
                    </TableCell>
                    <TableCell align="right">{crew.pilot1}</TableCell>
                    <TableCell align="right">{crew.pilot2}</TableCell>
                    <TableCell align="right">{crew.championship}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </Box>
    );
}
export default MisTripulaciones;