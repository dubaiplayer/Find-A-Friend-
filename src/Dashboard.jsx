import React from 'react'
import "./App.css"
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const openForm = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSerFtkQeFRhL12ZwpsCQknieGTe7kbA2tpjIIgS9bjanQ13Aw/viewform?usp=sf_link", "_blank")
    }
    const hero = {
        className: "hero"
    }
    const option = {
        className: "option",
        className:"shadow-lg p-3 mb-5 bg-white rounded"
    }
  return (
    <div className="main">
        <div {...hero}>
            <h1>Dashboard</h1>
            <div {...option}>
                <Link to="/Profile">Profiles!</Link>
            </div>
            
        </div>
    </div>

  )
}
