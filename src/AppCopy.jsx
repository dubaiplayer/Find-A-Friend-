import * as React from 'react'
import "./Homepage.css"
import Signup from "./Signup.jsx"
import { NoMatch } from './NoMatch'
import Logo from "./assets/websiteLogo.png"
import { Routes, Route, Outlet, Link } from "react-router-dom";
//import {Navbar} from "./Navbar"


function App() {

  return (
    <div id="homepage_banner">
    <div class="navigation">
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
    </div>
    <div id="indent-div">
      <img id="logo" src={Logo}></img>
      <h1 id="title">Find A Friend</h1>
      <h1>Connecting People</h1>
      <h1>from all around the world.</h1>
    </div>
    </div>
  )

  function Layout(){
    <nav>
      <ul>
        <li>
        <li><Link to="/Signup"><Signup></Signup></Link></li>
        </li>
      </ul>
    </nav>
  }


}

export default App;