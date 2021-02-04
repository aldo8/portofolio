import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Skill from './components/Skill';

function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ff9292"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <About/>
    <Portofolio/>
    <Skill/>
    </>
  );
}

export default App;
