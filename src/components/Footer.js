import React from 'react';
// import './Footer.scss';
import logoConsultaGeeksDark from '../assets/logo_consulta_geeks_dark.svg'

function Footer() {
  return (
    <>
        <footer>

            {/* SCRIPTS */}

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
            <script src="js/main.js"></script>

            {/* --------------- */}

            <div className="center">
                <div className="cont_footer">
                    <div className="col1">
                        <picture>
                            <img src={logoConsultaGeeksDark} width="113" height="40" alt=""/>
                        </picture>
                        <summary>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus non nulla aliquet luctus. Sed ullamcorper ex sed ipsum vehicula, non vulputate mauris finibus.
                        </summary>
                    </div>
                    <div className="col2">
                        <div className="col_nav">
                            <h6 id="link_f1">ConsultaGeeks</h6>
                            <nav className="nav_consultaG">
                                <ul>
                                    <li>
                                        <a href="">¿Quiénes somos?</a>
                                    </li>
                                    <li>
                                        <a href="">Servicios</a>
                                    </li>
                                    <li>
                                        <a href="">Nuestros Geeks</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col_nav">
                            <h6 id="link_f2">Legal</h6>
                            <nav className="nav_consultaG">
                                <ul>
                                    <li>
                                        <a href="">Políticas de privacidad</a>
                                    </li>
                                    <li>
                                        <a href="">Términos y condiciones</a>
                                    </li>
                                    <li>
                                        <a href="">Políticas de ConsultaGeeks</a>
                                    </li>
                                    <li>
                                        <a href="">Cookies</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col_nav">
                            <h6 id="link_f3">Contacto</h6>
                            <div className="cont_footer_contacto">
                                <ul>
                                    <li>
                                        Teléfono:<a href="tel:(51) 963 852 765">(51) 963 852 765</a>
                                    </li>
                                    <li>
                                        Email:<a href="mailto:info@consultageeks.com">info@consultageeks.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="cont_footer_redes">
                                <h6>Siguenos</h6>
                                <div className="links_redes">
                                    <ul>
                                        <li>
                                            <a href=""><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subfooter">
                    Consulta Geeks © 2020 - Todos los derechos reservados.
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer