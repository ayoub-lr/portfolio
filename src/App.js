import Nav from './Components/Navbar/Nav';
import Intro from './Components/Intro/Intro';
import Services from './Components/services/Services';
import Experience from './Components/Experiences/Experience';
import Work from './Components/Works/Work'; 
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react';
import './App.css'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"  style={{
      background : darkMode? 'black' : '',
      color: darkMode? 'white' : ''
    }}>
    <Nav />
    <Intro />
    <Services />
    <Experience />
    <Work />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  );
}


export default App;


