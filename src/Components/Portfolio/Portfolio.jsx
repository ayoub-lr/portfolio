import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide } from 'swiper/react'; 
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import 'swiper/css';



const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id='Portfolio' className='portfolio'>
    <span style={{
      color: darkMode? '#fff' : ''
    }}> Recent Project</span>
    <span> Portfolio </span>

  <Swiper
  spaceBetween={30}
  slidesPerView={3}
  grapCursor={true}
  className="portfolio-slider"
  >

    <SwiperSlide>
     <img src={Sidebar} alt=""  />
    </SwiperSlide>

    <SwiperSlide>
     <img src={Ecommerce} alt=""  />
    </SwiperSlide>

    <SwiperSlide>
     <img src={Musicapp} alt=""  />
    </SwiperSlide>

    <SwiperSlide>
     <img src={Hoc} alt=""  />
    </SwiperSlide>

  </Swiper>


    </div>
  )
}

export default Portfolio