import React from 'react';
import { Link } from "react-router-dom"
import Logo from "./assets/websiteLogo.png"
import "./Homepage.css"

export const Homepage = () => {
  return (
    <div id="homepage_banner">
      <div className="navigation">
        <nav>
          <ul>
            <li><Link to="/Signup">Sign Up!</Link></li>
            <li><Link to="/Signin">Sign In!</Link></li>
          </ul>
        </nav>
      </div>
      <img id="logo" src={ Logo } alt="website logo" />
      <h1 id="title">Find A Friend</h1>
      <h1>Connecting People</h1>
      <br />
      <h1>from all around the world.</h1>
    </div>
  );
};