import { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Paper,
  Typography,
} from '@mui/material';

const Ranking = () => {
  const [selectedChampionship, setSelectedChampionship] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [showRanking, setShowRanking] = useState(false);
  const [championships, setChampionships] = useState([]);
  const [races, setRaces] = useState([]);
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    // Simular la obtención de campeonatos desde el backend
    const fetchChampionships = async () => {
      // Reemplaza esto con la lógica real para obtener los campeonatos desde el backend
      const championshipsData = [
        { id: 1, name: 'Campeonato Regional de Madrid' },
        { id: 2, name: 'Campeonato Regional de Asturias' },
      ];
      setChampionships(championshipsData);
    };

    fetchChampionships();
  }, []);

  const fetchRaces = async (championshipId) => {
    // Reemplazar esto con la lógica real para obtener las carreras desde el backend
    const racesData = [
      { id: 10, name: 'Carrera 1', championshipId: 1 },
      { id: 20, name: 'Carrera 2', championshipId: 1 },
      { id: 30, name: 'Carrera 3', championshipId: 2 },
      { id: 40, name: 'Carrera 4', championshipId: 2 },
    ];
    setRaces(racesData.filter((race) => race.championshipId === championshipId));
  };

  const fetchRankingData = async (/**raceId**/) => {
    // Función para generar resultados aleatorios
    const generateRandomResults = () => {
      const generateRandomTeam = (excludeTeams) => {
        let teamX, teamY;
  
        do {
          teamX = Math.floor(Math.random() * 4) + 1;
          teamY = Math.floor(Math.random() * 4) + 1;
        } while (
          teamX === teamY ||
          excludeTeams.some(
            ([excludedX, excludedY]) =>
              (teamX === excludedX && teamY === excludedY) ||
              (teamX === excludedY && teamY === excludedX)
          )
        );
  
        return `Tripulacion${teamX}Equipo${teamY}`;
      };
  
      const generateRandomPoints = (position) => {
        switch (position) {
          case 1:
            return 120;
          case 2:
            return 100;
          case 3:
            return 90;
          default:
            return 0;
        }
      };
  
      return [
        generateRandomDriver(1, []),
        generateRandomDriver(2, [[rankingData[0]?.driver?.charAt(12), rankingData[0]?.driver?.charAt(18)]]),
        generateRandomDriver(3, [
          [rankingData[0]?.driver?.charAt(12), rankingData[0]?.driver?.charAt(18)],
          [rankingData[1]?.driver?.charAt(12), rankingData[1]?.driver?.charAt(18)],
        ]),
      ];
  
      function generateRandomDriver(position, excludeTeams) {
        return {
          position,
          driver: generateRandomTeam(excludeTeams),
          points: generateRandomPoints(position),
        };
      }
    };
  
    // Generar resultados aleatorios y actualizar rankingData
    const newRankingData = generateRandomResults();
    setRankingData(newRankingData);
  };

  const handleChangeChampionship = (event) => {
    const selectedChampionshipId = event.target.value;
    setSelectedChampionship(selectedChampionshipId);
    setSelectedRace('');
    setShowRanking(false);
    fetchRaces(selectedChampionshipId);
  };

  const handleChangeRace = (event) => {
    const selectedRaceId = event.target.value;
    setSelectedRace(selectedRaceId);
    setShowRanking(true);
    fetchRankingData(/**selectedRaceId */);
  };

  return (
    <Box minWidth="25vw">
        <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '50px', marginTop: '0px', marginBottom: '70px', backgroundColor: '#AFAFAF', borderRadius: '20px' }}>
            <InputLabel id="championship-label">Campeonato</InputLabel>
            <Select
                labelId="championship-label"
                id="championship"             
                value={selectedChampionship}
                onChange={handleChangeChampionship}
                style = {{backgroundColor: "white"}}
                fullWidth
            >
                {championships.map((championship) => (
                <MenuItem key={championship.id} value={championship.id}>
                    {championship.name}
                </MenuItem>
                ))}
            </Select>

            <InputLabel id="race-label">Carrera</InputLabel>
            <Select
                labelId="race-label"
                id="race"
                value={selectedRace}
                onChange={handleChangeRace}
                style = {{backgroundColor: "white"}}
                fullWidth
            >
                {races.map((race) => (
                <MenuItem key={race.id} value={race.id}>
                    {race.name}
                </MenuItem>
                ))}
            </Select>

            {showRanking && (
                <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="h6">Resultado última carrera</Typography>
                <ul>
                    {rankingData.map((entry) => (
                    <li key={entry.position}>
                        {`${entry.position}º - ${entry.driver} - ${entry.points} puntos`}
                    </li>
                    ))}
                </ul>
                </Paper>
            )}
        </Paper>
    </Container>
    </ Box>
  );
}

export default Ranking;
