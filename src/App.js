import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import NuestrosGeeks from './pages/NuestrosGeeks';
import Servicios from './pages/Servicios';
import QuienesSomos from './pages/QuienesSomos';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <>
     <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/nuestros_geeks' element={<NuestrosGeeks/>}></Route>
          <Route path='/quienes_somos' element={<QuienesSomos/>}></Route>
          <Route path='/servicios' element={<Servicios/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
     </Router>
    </>
  );
}