import React from 'react';
import './Header.scss';
import logoConsultaGeeks from '../assets/logo_consulta_geeks.svg';

function Header() {
  return (
    <>
        <header>
            <div className="center">
                <div className="header">
                    <h1>
                        <a href="index.html">
                            <img src={logoConsultaGeeks} width="135" height="48" alt=""/>
                        </a>
                    </h1>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <a href="sobre_nosotros.html">¿Quiénes Somos?</a>
                            </li>
                            <li>
                                <a href="">Servicios</a>
                            </li>
                            <li>
                                <a href="nuestros_geeks.html">Nuestros Geeks</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <div className="navbar_buttons">
                                <li>
                                    <a className="btn_outline" href="registro.html">Regístrate</a>
                                </li>
                                <li>
                                    <a className="btn_fill" href="iniciar_sesion.html">Iniciar Sesión</a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <a className="button_nav">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header