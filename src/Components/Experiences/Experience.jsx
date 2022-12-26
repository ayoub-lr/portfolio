import React from 'react';
import './Experience.css';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id='Experience' className='experience' style={{
      color: darkMode? '#000' : ''
    }}>
        <div className='archievement'>
            <div className='cyrcle'> 4+</div>
            <span style={{
            color: darkMode? '#fff' : ''
            }}>years</span>
            <span>Experience</span>
        </div>

        <div className='archievement'>
            <div className='cyrcle'> 20+</div>
            <span style={{
            color: darkMode? '#fff' : ''
            }}>Completed</span>
            <span>Project</span>
        </div>

        <div className='archievement'>
            <div className='cyrcle'> 5+</div>
            <span style={{
             color: darkMode? '#fff' : ''
             }}>Companies</span>
            <span>Work</span>
        </div>


    </div>
  )
}

export default Experience