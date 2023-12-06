// App.jsx

import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
//import Layout from './components/Layout';
import Home from './pages/Home';
import HomeAsistente from './pages/HomeAsistente';
import HomeAyuntamiento from './pages/HomeAyuntamiento';
import HomeEquipo from './pages/HomeEquipo';
import HomeFederacion from './pages/HomeFederacion';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Campeonatos from './pages/federacion/campeonatos';
import Facturas from './pages/federacion/Facturas';
import Reservas from './pages/federacion/Reservas';
import Tripulaciones from './pages/federacion/Tripulaciones';
import Legocars from './pages/federacion/Legocars';
import EquipCampeonatos from './pages/equipo/Campeonatos';
import MisReservas from './pages/equipo/MisReservas';
import MisTripulaciones from './pages/equipo/MisTripulaciones';
import { UserProvider } from './auth-routes/UserContext';
import { useUser } from './auth-routes/UserContext'
import Layout from './components/Layout';
import PrivateRoute from './auth-routes/PrivateRoute';

function AuthenticatedRoutes() {
  const { isAuthenticated } = useUser();

  return (
    <Routes>
      <Route path="/*" element={<Layout />} >
       <Route index element={<Home />} />
       <Route path="login" element={ !isAuthenticated ? <Login /> : <Navigate to={"/logout"} />} />
       <Route path="logout" element={<PrivateRoute ><Logout /></PrivateRoute>} />
       <Route path="asistente" element={<PrivateRoute rol={'asistente'}><HomeAsistente /></PrivateRoute>} />
       <Route path="ayuntamiento" element={<PrivateRoute rol={'ayuntamiento'}><HomeAyuntamiento /></PrivateRoute>} />
       <Route path="equipo" element={<PrivateRoute rol={'equipo'}><HomeEquipo /></PrivateRoute>} />
       <Route path="equipo/campeonatos" element={<PrivateRoute rol={'equipo'}><EquipCampeonatos /></PrivateRoute>} />
       <Route path="equipo/misreservas" element={<PrivateRoute rol={'equipo'}><MisReservas /></PrivateRoute>} />
       <Route path="equipo/mistripulaciones" element={<PrivateRoute rol={'equipo'}><MisTripulaciones /></PrivateRoute>} />
       <Route path="federacion"element={<PrivateRoute rol={'federacion'}><HomeFederacion /></PrivateRoute>} /> 
       <Route path="federacion/campeonatos" element={<PrivateRoute rol={'federacion'}><Campeonatos /></PrivateRoute>} />
       <Route path="federacion/facturas" element={<PrivateRoute rol={'federacion'}><Facturas /></PrivateRoute>} />
       <Route path="federacion/reservas" element={<PrivateRoute rol={'federacion'}><Reservas /></PrivateRoute>} />
       <Route path="federacion/tripulaciones" element={<PrivateRoute rol={'federacion'}><Tripulaciones /></PrivateRoute>} />
       <Route path="federacion/legocars" element={<PrivateRoute rol={'federacion'}><Legocars /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
      <div>
      <UserProvider>
       <AuthenticatedRoutes />
      </UserProvider>
      </div>
  );
}

export default App;


