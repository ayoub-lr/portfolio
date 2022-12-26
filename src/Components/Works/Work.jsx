import React from 'react';
import './Work.css';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import upwork from '../../img/Upwork.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from "framer-motion";


const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className='awesome'>
        <span style={{
      color: darkMode? '#fff' : ''
    }} >Work for All these</span>
        <span>Brands & Clients</span>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
           distinctio harum beatae quia, consequatur eaque esse?<br/>
           distinctio harum beatae quia, consequatur eaque <br/>
        </span>
        
        <button className='button s-button'>Here me</button>
        <div className='blur s-blur1' style={{background : '#ABF1FF94' }}></div>
        </div>

    {/* right side */}

    <div className='w-right'>
      <motion.div 
      initial={{rotate: 45}}
      whileInView={{rotate: 0}}
      viewport={{margin: '-40px'}}
      transition={{ duration: 3.5, type: 'spring'}}
      className='main-cyrcle'>

        <div className='sec-cyrcle'>
         <img src={upwork} alt="" />
        </div>

        <div className='sec-cyrcle'>
         <img src={fiverr} alt="" />
        </div>

        <div className='sec-cyrcle'>
         <img src={amazon} alt="" />
        </div>

        <div className='sec-cyrcle'>
         <img src={shopify} alt="" />
        </div>

        <div className='sec-cyrcle'>
         <img src={facebook} alt="" />
        </div>
      </motion.div>

    {/* Background circle */}

    <div className='bg-circle blueCircle'></div>
    <div className='bg-circle yellowCircle'></div>

    </div>
  </div>
 );
};

export default Work