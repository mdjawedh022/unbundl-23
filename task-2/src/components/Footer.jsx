import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram,AiFillLinkedin ,AiFillTwitterSquare} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="main-f"> 
    <div className="footer">
      <div className="top-footer">
      <div>
          <h1>Undundl</h1>
          <p>Choose your Favourite chocolates</p>
        </div>
        <div>
          <Link>
                 <AiFillFacebook  className="socailmedia-icons" /></Link>
          <Link> <AiFillInstagram className="socailmedia-icons"/></Link>
          <Link> <AiFillLinkedin className="socailmedia-icons"/> </Link>
          <Link><AiFillTwitterSquare className="socailmedia-icons"/></Link>
        </div>
      </div>
      <div className="bottom-footer">
       <div>
        <h4>Project</h4>
        <Link to="/">Changelog</Link>
        <Link to="/">Status</Link>
        <Link to="/">License</Link>
        <Link to="/">All version</Link>
       </div>

       <div>
        <h4>Community</h4>
        <Link to="/">Github</Link>
        <Link to="/">Issues</Link>
        <Link to="/">Project</Link>
        <Link to="/">Twitter</Link>
       </div>

       <div>
        <h4>Help</h4>
        <Link to="/">Support</Link>
        <Link to="/">Troubleshooting</Link>
        <Link to="/">Contact</Link>
       </div>

       <div>
        <h4>Others</h4>
        <Link to="/">Terms of Service</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Term and condition</Link> 
       </div>
      </div>
    </div>
    <p className="Copyright">Copyright © Unbundl Corporation 2023 All Rights Reserved</p></div>
  );
};
export default Footer;
