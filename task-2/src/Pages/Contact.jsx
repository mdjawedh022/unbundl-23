import React from 'react'
import "../styles/Contact.css"
import Hero from '../components/Hero'
import img3 from "../image/1.jpg"
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Hero
       cName="hero-service"
       heroImage={img3}
       title="About"
      />
      <Form/>
    </div>
  )
}

export default Contact
