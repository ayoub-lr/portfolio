import React from 'react';
import './Intro.css';
import Floatingdiv from '../Floatingdiv/Floatingdiv'
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from "framer-motion";


const Intro = () => {

  const transition = {duration : 2 , type: 'spring'};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro' style={{
      color: darkMode? 'black' : ''
    }}>

       <div className='i-left'>
        <div className="i-name">
            <span style={{
             color: darkMode? '#fff' : ''
             }}>Hy! I am</span>
            <span >Ayoub Oulghrini</span>
            <span>
              Frontend developer with hight level of experience
              in web designing and developement, producting the 
              Quality work
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className='i-icons'>
           <a href='#'><img src={github} alt='' /></a>
           <a href='#'> <img src={linkedin} alt='' /></a>
           <a href='#'><img src={instagram} alt='' /></a>
        </div>
       
       </div>

       <div className='i-right'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img 
            src={boy} alt="" />

            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
           src={glassesimoji} alt="" />

        <motion.div
         initial={{top:'-4%' , left:'74%'}}
         whileInView={{left:'68%'}}
         transition={transition}
          style={{top:'-4%', left:'68%'}}
          className='Floating-div'
          >
            <Floatingdiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>

        <motion.div
         initial={{top:'18rem' , left:'9rem'}}
         whileInView={{left:'0rem'}}
         transition={transition}
         style={{top:'18rem', left:'0rem'}}
         className='Floating-div'>
            <Floatingdiv image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>
        {/* blur div */}
        <div className='blur' style={{ background: "grb(238 210 255)" }}></div>
        <div className='blur' style={{ background: '#c1f5ff' , top: '17rem' , width: '21rem', height:'11rem' ,left: '-9rem' }}></div>
       </div>
    </div>
  )
}

export default Intro