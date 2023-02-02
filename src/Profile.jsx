import React, {useState, useEffect} from "react";
import { initializeApp, db } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { firebaseConfig } from './Firebase'

export const Profile = () => {

    const add = async() => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app); 
  
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
  
          //console.log(doc.id);
          //console.log(doc.data().email)
          const emailList = doc.data().email
          const usernameList = doc.data().username
          console.log(usernameList)
      
      });
    }
    useEffect(() => {
      add()
    },[])

  return (
    <div></div>
  )
}
