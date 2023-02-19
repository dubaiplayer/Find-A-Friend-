import React, {useState, useEffect} from "react";
import "./App.css"
import { Link } from "react-router-dom";
import { firebaseConfig } from "./Firebase";
import { initializeApp, db } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc} from "firebase/firestore";
import 'firebase/database';

export const Signin = () => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  const [getEmail, setgetEmail] = useState('')
  const [getPassword, setgetPassword] = useState('')
  

   async function Check(){

    try{
      const docRef = doc(db, "users", getEmail);
      const docSnap = await getDoc(docRef);

      console.log("Document data:", docSnap.data().password);
      if (getPassword === docSnap.data().password){
        alert("Password Correct!")

        window.open('/Dashboard', '_blank')
      }

    else if (getPassword !== docSnap.data().password){
        alert("Password Invalid!")
      }
    
    }
    

  catch{
    alert("Invalid Email!")
  }

    
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
    <div className="main">
          <div className="hero">

              <h1 {...props2}>Let's Get You Signed In</h1>
              <input id="getEmail" {...props1} type="email" placeholder="Email" value={getEmail} onChange={(res) => setgetEmail(res.target.value)}></input>
              <input id="getPassword" {...props1} type="text" placeholder="Password" value={getPassword} onChange={(res) => setgetPassword(res.target.value)}></input>
              <button className="signup" onClick={()=>Check()}>Sign in</button>
          </div>
      </div>

  )
}