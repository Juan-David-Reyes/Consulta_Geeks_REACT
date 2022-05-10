import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Header.scss';
import logoConsultaGeeks from '../assets/logo_consulta_geeks.svg';
import QuienesSomos from '../pages/QuienesSomos';
import Servicios from '../pages/Servicios';
import NuestrosGeeks from '../pages/NuestrosGeeks'

function Header() {
  return (
    <>
        <header>
            <div className="center">
                <div className="header">
                    <Router>
                        <h1>
                            <Link to="/">
                                <img src={logoConsultaGeeks} width="135" height="48" alt=""/>
                            </Link>
                        </h1>
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <Link to="/quienes_somos">¿Quiénes Somos?</Link>
                                </li>
                                <li>
                                    <Link to="/servicios">Servicios</Link>
                                </li>
                                <li>
                                    <Link to="/nuestros_geeks">Nuestros Geeks</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <div className="navbar_buttons">
                                    <li>
                                        <Link className="btn_outline" to="/registrate">Regístrate</Link>
                                    </li>
                                    <li>
                                        <Link className="btn_fill" to="/iniciar_sesion">Iniciar Sesión</Link>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/quienes_somos" element={<QuienesSomos/>} />
                            <Route path="/servicios" element={<Servicios/>} />
                            <Route path="/nuestros_geeks" element={<NuestrosGeeks/>} />
                        </Routes>
                        <div className="button_nav">
                            <i className="fas fa-bars"></i>
                        </div>
                    </Router>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header