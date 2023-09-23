import React from 'react'
// import img1 from "../image/1.jpg"
import "../styles/Hero.css"
import { Link } from 'react-router-dom'
const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.heroImage} alt="" />
      <div className="hero-text">
<h1>{props.title}</h1>
<p>{props.text}</p>
<Link to={props.url} className={props.btncl}>{props.btntext}</Link>
      </div>
    </div>
  )
}

export default Hero
