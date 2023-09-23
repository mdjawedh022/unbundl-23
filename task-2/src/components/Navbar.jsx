import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiLogIn,BiSolidUserCircle} from "react-icons/bi"
import {BsFillCartFill} from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";
import { MenuItems } from "./MenuItems";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const [CartData, setCartData] = useState(0);

  // Define 'data' with an initial value (empty array)
  const [data, setData] = useState([]);

  console.log(CartData);

  useEffect(() => {
    axios.get(`https://chocolates-8z1x.onrender.com/cart`)
      .then(({ data }) => {
        // Update 'data' with the response data
        setData(data);

        // Update 'CartData' with the length of 'data'
        setCartData(data.length);

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Include 'data' in the dependency array
  return (
    <div>
      <div className="main-navbar-section">
        {isAuthenticated && (
          <div className="userName-section">
            <p>😊 Welcome {user.name}</p>{" "}
          </div>
        )}
        <div className="navbarItems">
          <h1 className="navbar-logo">Unbundl</h1>
          <div className="menu-icons" onClick={handleClick}>
            {state.clicked ? (
              <AiOutlineClose className="i" />
            ) : (
              <GiHamburgerMenu className="i" />
            )}
          </div>
          <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((items, i) => (
              <li key={i}>
                <Link to={items.url} className={items.cName}>
                  {items.icons}
                  {items.title}  
                </Link>
               
              </li>
            ))}
            <Link to="/cart">{data.length} { <BsFillCartFill className="icon1" />}</Link>

            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
              <BiSolidUserCircle className="icon1" />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}><BiLogIn className="icon1" /></button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
