// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';

import "aos/dist/aos.css"

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home"
import Services from "./components/Services/Services.jsx"
import Banner from "./components/Banner/Banner"


const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
duration: 700,
easing: "ease-in",
delay: 100,

    })
  })
  return (<div style={{ height: '100vh' }}>
    <Navbar/>
    <Home/>
    <Services/>
    <Banner/>
     </div>)
}

export default App
