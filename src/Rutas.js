import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ChampionDetails from './pages/ChampionDetails';


function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champion/:version/:name' element={<ChampionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
