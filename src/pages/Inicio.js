import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';


function Inicio() {
  return (
    <>
          <main>
          <div className="spacer"></div>
          <section className="s_hero">
              {/* <!-- Swiper --> */}
          <div className="swiper homeHero_swiper">
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <picture>
                          <img width="1440" height="768" src="images/diseno/01-home/s_home_1.jpg" alt=""/>
                      </picture>
                      <div className="center">
                          <div className="cont_gendest_home">
                              <div className="cont_col_desthome">
                                  <h2 data-swiper-parallax="-100">¿Problemas con tu computadora?</h2>
                                  <div data-swiper-parallax="-200" className="desc_home_hero">Suspendisse tincidunt quam eget justo feugiat sodales. Praesent fringilla tellus augue.</div>

                                  <div className="cont_mobile_home_filter">
                                      <div className="filter_slide">
                                          Busca tu Geeks
                                      </div>
                                      <button className="type_submit" type="submit"> <i className="fas fa-search"></i> </button>
                                  </div>

                                  <form  data-swiper-parallax="-300" action="" className="cont_filter_hero">
                                      <div className="campo_filtro">
                                          <label htmlFor="">Escribe una palabra clave</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Especialidad</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Modalidad</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Presencial</option>
                                              <option value="">Virtual</option>
                                          </select>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Ubicación</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                          </select>
                                      </div>
                                      <button type="submit"> <i className="fas fa-search"></i> </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="swiper-slide">
                      <picture>
                          <img width="1440" height="768" src="images/diseno/01-home/s_home_2.jpg" alt=""/>
                      </picture>
                      <div className="center">
                          <div className="cont_gendest_home">
                              <div className="cont_col_desthome">
                                  <h2 data-swiper-parallax="-100">¿Problemas con tu computadora?</h2>
                                  <div data-swiper-parallax="-200" className="desc_home_hero">Suspendisse tincidunt quam eget justo feugiat sodales. Praesent fringilla tellus augue.</div>

                                  <div className="cont_mobile_home_filter">
                                      <div className="filter_slide">
                                          Busca tu Geeks
                                      </div>
                                      <button className="type_submit" type="submit"> <i className="fas fa-search"></i> </button>
                                  </div>

                                  <form  data-swiper-parallax="-300" action="" className="cont_filter_hero">
                                      <div className="campo_filtro">
                                          <label htmlFor="">Escribe una palabra clave</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Especialidad</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Modalidad</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Presencial</option>
                                              <option value="">Virtual</option>
                                          </select>
                                      </div>
                                      <div className="campo_filtro">
                                          <label htmlFor="">Ubicación</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                          </select>
                                      </div>
                                      <button type="submit"> <i className="fas fa-search"></i> </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="swiper-slide">
                      <picture>
                          <img width="1440" height="768" src="images/diseno/01-home/s_home_3.jpg" alt=""/>
                      </picture>
                      <div className="center">
                          <div className="cont_gendest_home">
                              <div className="cont_col_desthome">
                                  <h2 data-swiper-parallax="-100">¿Problemas con tu computadora?</h2>
                                  <div data-swiper-parallax="-200" className="desc_home_hero">Suspendisse tincidunt quam eget justo feugiat sodales. Praesent fringilla tellus augue.</div>

                                  <div className="cont_mobile_home_filter">
                                      <div className="filter_slide">
                                          Busca tu Geeks
                                      </div>
                                      <button className="type_submit" type="submit"> <i className="fas fa-search"></i> </button>
                                  </div>
                                  
                                  <form  data-swiper-parallax="-300" action="" className="cont_filter_hero">
                                      <div className="campo_filtro">
                                          <label for="">Escribe una palabra clave</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label for="">Especialidad</label>
                                          <input type="text" value=""/>
                                      </div>
                                      <div className="campo_filtro">
                                          <label for="">Modalidad</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Presencial</option>
                                              <option value="">Virtual</option>
                                          </select>
                                      </div>
                                      <div className="campo_filtro">
                                          <label for="">Ubicación</label>
                                          <select name="" id="">
                                              <option value="" selected disabled> Seleccionar</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                              <option value="">Lima, Miraflores</option>
                                          </select>
                                      </div>
                                      <button type="submit"> <i className="fas fa-search"></i> </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="swiper-pagination"></div>
          </div>
          </section>

          <section className="s_como_funciona">
              <div className="center">
                  <div className="cont_comofunciona">
                      <div className="cont_tit_section">
                          <h3 className="tit_section">¿Cómo funciona?</h3>
                      </div>
                  </div>
              </div>
              {/* <!-- Swiper --> */}
              <div className="swiper swiperComoFunciona">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide">
                          <div className="cont_card_funciona">
                              <div className="number_cf">
                                  01
                              </div>
                              <h5 className="tit_cf">Publicar</h5>
                              <div className="desc_cf">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima officiis necessitatibus voluptatum dolorum sunt?
                              </div>
                          </div>
                      </div>
                      <div className="swiper-slide">
                          <div className="cont_card_funciona">
                              <div className="number_cf">
                                  02
                              </div>
                              <h5 className="tit_cf">Seleccionar</h5>
                              <div className="desc_cf">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima officiis necessitatibus voluptatum dolorum sunt?
                              </div>
                          </div>
                      </div>
                      <div className="swiper-slide">
                          <div className="cont_card_funciona">
                              <div className="number_cf">
                                  03
                              </div>
                              <h5 className="tit_cf">Empieza ahora</h5>
                              <div className="desc_cf">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima officiis necessitatibus voluptatum dolorum sunt?
                              </div>
                          </div>
                      </div>
                      <div className="swiper-slide">
                          <div className="cont_card_funciona">
                              <div className="number_cf">
                                  04
                              </div>
                              <h5 className="tit_cf">Aceptar</h5>
                              <div className="desc_cf">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima officiis necessitatibus voluptatum dolorum sunt?
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="swiper-pagination"></div>
              </div>
          </section>

          <section className="s_sobre_nosotros not_before">
              <div className="center">
                  <div className="cont_sobre_nosotros">
                      <picture>
                          <img width="322" height="531" src="images/diseno/01-home/img_sobrenosotros.png" alt=""/>
                      </picture>
                      <div className="cont_tit2_s al_left">
                          <h6>Sobre nosotros</h6>
                          <h3>Solucionar problemas es nuestro objetivo</h3>
                          <div className="desc_tit2">
                              Somos una empresa que busca absolver sus consultas tecnológicas y problemas de hardware de manera inmediata: remota o presencialmente, para ello ponemos a su disposición un equipo humano que podrá brindarle el mejor servicio con el respaldo de nuestra empresa en el menor tiempo posible.
                          </div>
                          <a href="" className="btn_fill">Conoce más</a>
                      </div>
                  </div>
              </div>
          </section>

          <section className="s_nuestros_geeks not_before">
              <div className="center">
                  <div className="cont_nuestros_geeks">
                      <div className="cont_tit2_s al_left">
                          <h6>Nuestros geeks</h6>
                          <h3>Elimina esa duda que te impide avanzar en tu trabajo</h3>
                      </div>
                      <div className="geeks_cards">

                          <div className="card_geek">
                              <div className="id_geek">
                                  <picture>
                                      <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                                  </picture>
                                  <div className="cont_profile">
                                      <div className="name">
                                          Nombre Apellido
                                      </div>
                                      <div className="profile">
                                          Técnico de PC
                                      </div> 
                                  </div>
                              </div>
                              <div className="desc_geek">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt eget semper libero. Enim magna cras ac accumsan non.
                              </div>
                              <div className="rate_geek">
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                              </div>
                          </div>

                          <div className="card_geek">
                              <div className="id_geek">
                                  <picture>
                                      <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                                  </picture>
                                  <div className=".cont_profile">
                                      <div className="name">
                                          Nombre Apellido
                                      </div>
                                      <div className="profile">
                                          Técnico de PC
                                      </div> 
                                  </div>
                              </div>
                              <div className="desc_geek">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt eget semper libero. Enim magna cras ac accumsan non.
                              </div>
                              <div className="rate_geek">
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                              </div>
                          </div>

                          <div className="card_geek">
                              <div className="id_geek">
                                  <picture>
                                      <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                                  </picture>
                                  <div className=".cont_profile">
                                      <div className="name">
                                          Nombre Apellido
                                      </div>
                                      <div className="profile">
                                          Técnico de PC
                                      </div> 
                                  </div>
                              </div>
                              <div className="desc_geek">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt eget semper libero. Enim magna cras ac accumsan non.
                              </div>
                              <div className="rate_geek">
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                                  <span className="fas fa-star"></span>
                              </div>
                          </div>

                      </div>

                      <div className="cont_w100_btn">
                          <a href="" className="btn_fill">Encuentra tu Geeks</a>
                      </div>
                  </div>
              </div>
          </section>

          <section className="s_nuestros_serv">
              <div className="center">
                  <div className="cont_nuestros_serv">
                      <div className="cont_tit2_s al_left">
                          <h6>nuestros servicios</h6>
                          <h3>Te ofrecemos servicios rápidos y de calidad</h3>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                      <div className="card_servicio">
                          <picture>
                              <img width="45" height="40" src="images/diseno/01-home/icono_ns.png" alt=""/>
                          </picture>
                          <h5>Reparación de PC</h5>
                          <div className="desc_serv">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sit vitae maecenas iaculis. Metus.
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="s_banner_empieza">
              <div className="center">
                  <div className="cont_banner_empieza">
                      <div className="desc_banner_e">
                          <h3>¡Empieza ahora!</h3>
                          <div className="txt_desc_e">
                              ¿Tienes un problema con la computadora que te impide completar una tarea de trabajo urgente? ¿Estás harto de la lentitud de tu PC?
                              <br/>
                              <br/>
                              Encuentra tu Geeks para resolver tu problema.
                          </div>
                          <a href="" className="btn_fill">Encuentra tu Geeks</a>
                      </div>
                      <picture>
                          <img src="images/diseno/01-home/img_banner.png" width="352" height="430" alt=""/>
                      </picture>
                  </div>
              </div>
          </section>

          <section className="s_testimonios">
              <div className="center">
                  <div className="cont_testimonios">
                      <div className="cont_tit2_s al_center">
                          <h6>testimonios</h6>
                          <h3>Los que dicen nuestros usuarios</h3>
                      </div>
                      {/* <!-- Swiper --> */}
                      <Swiper className="swiper swiperTestimonios"
                        spaceBetween={20}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="card_testimonio">
                              <picture>
                                  <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                              </picture>
                              <q>
                                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                              </q>
                              
                              <div className="name_test">
                                  Carlos Silva
                                  <span className="lugar_test">Lima, Miraflores</span>
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card_testimonio">
                              <picture>
                                  <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                              </picture>
                              <q>
                                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                              </q>
                              
                              <div className="name_test">
                                  Carlos Silva
                                  <span className="lugar_test">Lima, Miraflores</span>
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card_testimonio">
                              <picture>
                                  <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                              </picture>
                              <q>
                                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                              </q>
                              
                              <div className="name_test">
                                  Carlos Silva
                                  <span className="lugar_test">Lima, Miraflores</span>
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card_testimonio">
                              <picture>
                                  <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                              </picture>
                              <q>
                                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                              </q>
                              
                              <div className="name_test">
                                  Carlos Silva
                                  <span className="lugar_test">Lima, Miraflores</span>
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card_testimonio">
                              <picture>
                                  <img src="images/diseno/01-home/foto_geek.png" width="88" height="88" alt=""/>
                              </picture>
                              <q>
                                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                              </q>
                              
                              <div className="name_test">
                                  Carlos Silva
                                  <span className="lugar_test">Lima, Miraflores</span>
                              </div>
                          </div>
                        </SwiperSlide>
                        
                        ...
                      </Swiper>
                      
                  </div>
              </div>
          </section>

          <section className="s_blog">
              <div className="center">
                  <div className="cont_tit2_s al_center">
                      <h6>blog</h6>
                      <h3>Entérate de nuestras últimas noticias</h3>
                  </div>
                  <div className="cont_blog">
                      
                      <a href="" className="card_b">
                          <picture>
                              <img width="347" height="178" src="images/diseno/01-home/b_img1.jpg" alt=""/>
                          </picture>
                          <div className="b_desc_txt">
                              <div className="date_blog">
                                  <i className="fas fa-calendar-day"></i> 14 / 11 / 2020
                              </div>
                              <h4 className="tit_card_blog">
                                  Sed id odio a gravida auctor
                              </h4>
                              <div className="txt_card_blog">
                                  Amet, ipsum donec fermentum sit nibh. 
                                  Morbi vitae quisque eget ut integer massa. 
                                  Sed id odio a gravida auctor.
                              </div>
                          </div>
                      </a>

                      <a href="" className="card_b">
                          <picture>
                              <img width="347" height="178" src="images/diseno/01-home/b_img1.jpg" alt=""/>
                          </picture>
                          <div className="b_desc_txt">
                              <div className="date_blog">
                                  <i className="fas fa-calendar-day"></i> 14 / 11 / 2020
                              </div>
                              <h4 className="tit_card_blog">
                                  Sed id odio a gravida auctor
                              </h4>
                              <div className="txt_card_blog">
                                  Amet, ipsum donec fermentum sit nibh. 
                                  Morbi vitae quisque eget ut integer massa. 
                                  Sed id odio a gravida auctor.
                              </div>
                          </div>
                      </a>

                      <a href="" className="card_b">
                          <picture>
                              <img width="347" height="178" src="images/diseno/01-home/b_img1.jpg" alt=""/>
                          </picture>
                          <div className="b_desc_txt">
                              <div className="date_blog">
                                  <i className="fas fa-calendar-day"></i> 14 / 11 / 2020
                              </div>
                              <h4 className="tit_card_blog">
                                  Sed id odio a gravida auctor
                              </h4>
                              <div className="txt_card_blog">
                                  Amet, ipsum donec fermentum sit nibh. 
                                  Morbi vitae quisque eget ut integer massa. 
                                  Sed id odio a gravida auctor.
                              </div>
                          </div>
                      </a>
                      

                      

                  </div>

                  <div className="cont_w100_btn">
                      <a href="" className="btn_fill">Leer más artículos</a>
                  </div>

              </div>
          </section>


      </main>
    </>
  )
}

export default Inicio