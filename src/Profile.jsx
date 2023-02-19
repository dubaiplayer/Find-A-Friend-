import React, {useState, useEffect} from "react";
import { initializeApp, db } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { firebaseConfig } from './Firebase'

export const Profile = () => {

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      useEffect(() => {
        async function fetchData(){
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
    
            //console.log(doc.id);
            const infoList = doc.data().info
            const usernameList = doc.data().username
            //console.log(doc.data())
            
            querySnapshot.forEach(doc => { 
              let userData = doc.data().info + doc.data().username + doc.data().email
          })
            
        })}
        fetchData()
      },[])
    


    return (
    //Insert HTML Here
    <div id="root">
      <div id="profile"></div>
    </div>
  )
}
