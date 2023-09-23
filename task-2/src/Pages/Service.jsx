import React from 'react'
import "../styles/Service.css";
import Hero from '../components/Hero';
import img4 from "../image/1.jpg"
import Recent from '../components/Recent';
 const Service = () => {
  return (
    <div>
        <Hero
       cName="hero-service"
       heroImage={img4}
       title="Choose your Favourite chocolates"
  
      />
      <Recent/>
    </div>
  )
}

export default Service
