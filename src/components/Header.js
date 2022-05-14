import { NavLink } from 'react-router-dom';
// import './Header.scss';
import logoConsultaGeeks from '../assets/logo_consulta_geeks.svg';


export default function Header() {
  return (
    <>
        <header>
            <div className="center">
                <div className="header">
                        
                        <h1>
                            <NavLink to="/"><img src={logoConsultaGeeks} width="135" height="48" alt=""/></NavLink>
                        </h1>
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <NavLink to="/quienes_somos">¿Quiénes Somos?</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/servicios">Servicios</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/nuestros_geeks">Nuestros Geeks</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <div className="navbar_buttons">
                                    <li>
                                        <NavLink className="btn_outline" to="/registrate">Regístrate</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="btn_fill" to="/iniciar_sesion">Iniciar Sesión</NavLink>
                                    </li>
                                </div>
                            </ul>
                        </nav>

                        <div className="button_nav">
                            <i className="fas fa-bars"></i>
                        </div>

                </div>
            </div>
        </header>
    </>
  )
}
