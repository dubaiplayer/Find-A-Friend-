import "./App.css";
import { firebaseConfig } from "./Firebase";
import React, {useState} from "react";
import { initializeApp, db } from "firebase/app";
import { getFirestore, collection, doc, setDoc} from "firebase/firestore";


export const Signup = () => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [aboutMe, setaboutMe] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [phonenumber, setPhonenumber] = useState('')

  const signup = async() => {

    //const addUser = async (e) => {
     // e.preventDefault();  
     
      try {
          const docRef = await setDoc(doc(db, "users", email), 
          {username : username, 
            email : email,
             password : password,
             age: age,
             gender: gender,
            info: aboutMe,
            phonenumber: phonenumber})

            alert(`Hello ${username}`)
            console.log({phonenumber})
            window.open('/Dashboard', '_blank')

          //console.log(docRef.id)
          console.log("hello this is a test")


          
        } catch (e) {
          console.error("Error adding document: ", e);
        }
  //}
    

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
      
      <h1 {...props2}>Sign Up!</h1>
      <input id="email" {...props1} type="email" placeholder="Email" value={email} onChange={(res) => setEmail(res.target.value)}></input>
      <input id="password" {...props1} type="text" placeholder="Password" value={password} onChange={(res) => setPassword(res.target.value)}></input>
      <input id="username"  {...props1} type="text" placeholder="Username" value={username} onChange={(res) => setUsername(res.target.value)}></input>
      <textarea id="aboutMe" type="text" placeholder="About Yourseld (Are You A Farmer or Buyer?)" value={aboutMe} onChange={(res) => setaboutMe(res.target.value)}></textarea>
      <input id="age" {...props1} type="number" placeholder="Age" value={age} onChange={(res) => setAge(res.target.value)}></input>
      <input id="gender" {...props1} type="text" placeholder="Gender" value={gender} onChange={(res) => setGender(res.target.value)}></input>
      <input id="phonenumber" {...props1} type="number" placeholder="Phonenumber" value={phonenumber} onChange={(res) => setPhonenumber(res.target.value)}></input>
      <button className="signup" onClick={() => signup()}>Sign up</button>

      </div>
    </div>
  );
}
