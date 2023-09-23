import React from 'react'
import "../styles/Home.css";
import Hero from '../components/Hero';
import img1 from "../image/2.jpg"
import Choco from '../components/Choc';
import Recent from '../components/Recent';
const Home = () => {
  return (
    <div>
  <Hero
  cName="hero"
  heroImage={img1}
  title="Let's remember our childhood with chocolates"
  text="Choose your Favourite chocolates."
  btntext="Buy"
  url="/"
  btncl="showbtn"
  />
  <Choco/>
  <Recent/>
    </div>
  )
}

export default Home
