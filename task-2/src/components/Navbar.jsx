import React, { useState } from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { MenuItems } from './MenuItems';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [state,setState]=useState(false);
  const { loginWithRedirect,logout,isAuthenticated,user,isLoading} = useAuth0();

  const handleClick=()=>{
    setState({clicked:!state.clicked})
  }

  
  return (
    <div>
     
     <div className="main-navbar-section">

     {isAuthenticated&& <div className='userName-section'><p>😊 Welcome {user.name}</p> </div>}
      <div className="navbarItems">
        <h1 className='navbar-logo'>Unbundl</h1>
        <div className="menu-icons" onClick={handleClick}>
        {state.clicked ? <AiOutlineClose className='i'/>:<GiHamburgerMenu className='i'/>}
        </div>
         <ul className={state.clicked?"nav-menu active":"nav-menu"}>
            {MenuItems.map((items,i)=>(
              <li key={i}>
              <Link to={items.url} className={items.cName}>
             {items.icons}
              {items.title}
              </Link>
              
          </li>
            ))}
            
            {isAuthenticated ?
           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button onClick={() => loginWithRedirect()}>Log In</button>}
           

         </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
