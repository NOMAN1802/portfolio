/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './components/Navbar'
import { useCallback } from "react";
import { Outlet } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ParticleBg from "./components/ParticleBg/ParticleBg"
import Footer from './components/Footer/Footer';
import ParticleBg from './components/ParticleBg/ParticleBg';


function App() {
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
      
      <Navbar></Navbar>
      {/* <ParticleBg></ParticleBg> */}
     
  
      <Outlet></Outlet>
     <Footer></Footer>
      
    </>
  )
}

export default App
