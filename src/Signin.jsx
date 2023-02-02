import React, {useState, useEffect} from "react";
import "./App.css"
import { firebaseConfig } from "./Firebase";
import { initializeApp, db } from "firebase/app";
import { getFirestore, collection, doc, setDoc} from "firebase/firestore";
import 'firebase/database';

export const Signin = () => {

    const directDashboard = () => {
        //insert link to dashboard once user signed in<Link></Link>
    }
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app); 

    const [getEmail, setgetEmail] = useEffect('')
    const [getPassword, setgetPassword] = useEffect('')

    const check = () => {
      const colRef = collection(db, getEmail);
      console.log(colRef)
    
    }

    const props1 = {
        className:"center",
        className:"input"
      }
    
      const props2 = {
        className:"font",
        className:"center"
      }
  return (
    <><div className="main">
          <div className="hero">

              <h1 {...props2}>Let's Get You Signed</h1>
              <input id="getEmail" {...props1} type="email" placeholder="Email" value={getEmail} onChange={(res) => setgetEmail(res.target.value)}></input>
              <input id="getPassword" {...props1} type="text" placeholder="Password" value={getPassword} onChange={(res) => setgetPassword(res.target.value)}></input>

          </div>
      </div></>

  )
}