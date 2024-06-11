import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDocs } from "firebase/firestore";
import { firebaseConfig } from "./Firebase";
import { Usercard } from "./Usercard";
import "./Profile.css";

export const Profile = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

  const [user, setUser] = useState([]);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let users = [];
    querySnapshot.forEach((doc) => {

      const userData = {
        Gender: doc.data().gender,
        Number: doc.data().phonenumber,
        Email: doc.data().email,
        Information: doc.data().info,
        Age: doc.data().age,
      };
      users.push({ [doc.data().username]: userData });
    });
    setUser(users);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function displayUser() {
    return <Usercard user={user}></Usercard>;
  }

  return (
    <div id="root">
      <div>
        {displayUser()}
      </div>
    </div>
  );
};
