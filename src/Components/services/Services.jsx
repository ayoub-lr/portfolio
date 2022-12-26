import React from 'react';
import './Services.css' ;
import Card from '../Cards/Card';
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Resume from './Resume.pdf';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from "framer-motion";

const Services = () => {

  const transition = {duration : 1 , type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className='services' id='Services'>
        <div className='awesome'>
        <span style={{
      color: darkMode? '#fff' : ''
    }}>My Awesome</span>
        <span>services</span>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
           distinctio harum beatae quia, consequatur eaque esse?
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button></a>
        <div className='blur s-blur1' style={{background : '#ABF1FF94' }}></div>
        </div>
        

      {/* Right side */}
        <div className='cards'>

        <motion.div 
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
        style={{left : '14rem'}}>
        <Card emoji={heartemoji}  
        heading={'Design'} 
        detail={"Figma, adobe photoshop, adobe XD, Canva"} />
        </motion.div>

                     {/* card 2 */}
         
        <motion.div
         whileInView={{left:'-4rem'}}
         initial={{left:'-15rem'}}
         transition={transition}
        style={{left : '-4rem' , top:'12rem'}}>
        <Card emoji={glasses}  
        heading={'Developer'} 
        detail={"Html, Css, JavaScript, React, Wordpress"} />
        </motion.div>
                      {/* card 3 */}
         
        <motion.div
         whileInView={{left:'12rem'}}
         initial={{left:'20rem'}}
         transition={transition}
        style={{left : '12rem', top:'19rem'}}>
        <Card emoji={humble}  
        heading={'UI/UX'} 
        detail={"Figma, adobe photoshop, adobe XD, Sketch"} />
        </motion.div>

      <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
        </div>
    </div>

  )
}

export default Services