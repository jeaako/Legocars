// App.jsx

import './App.css';
import { Routes, Route } from "react-router-dom";
//import Layout from './components/Layout';
import Home from './pages/Home';
import HomeAsistente from './pages/HomeAsistente';
import HomeAyuntamiento from './pages/HomeAyuntamiento';
import HomeEquipo from './pages/HomeEquipo';
import HomeFederacion from './pages/HomeFederacion';

function App() {

  return (
      <div>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/asistente" element={<HomeAsistente />} />
          <Route path="/ayuntamiento" element={<HomeAyuntamiento />} />
          <Route path="/equipo" element={<HomeEquipo />} />
          <Route path="/federacion" element={<HomeFederacion />} />   
      </Routes>
      </div>
  );
}

export default App;


