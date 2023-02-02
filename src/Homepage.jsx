import React from 'react'
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
        <Link to="/Signup">Sign Up!</Link>
        <Link to="/Signin">Sign In!</Link>
    </div>
  )
}
