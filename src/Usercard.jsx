import React from "react";
import "./Usercard.css";

export const Usercard = ({ user }) => {

  console.log("user: ", user)
  //   return (
  //     <div id="card">
  //         <div class="list">
  //             <h4>Username: Devesh</h4>
  //             <h4>Age: 55</h4>
  //             <h4>Info: I like cats.</h4>
  //             <h4>Gender: Male</h4>
  //         </div>
  //     </div>

  //   )
  return user.map((userData) => {
    const username = Object.keys(userData)[0];
    const userFields = userData[username];
    return (
      <div id="card">
        <ul key={username} id="list">
          <h6>{username}:</h6>
          {Object.keys(userFields).map((fieldName) => (
            <h6 key={fieldName}>
              {fieldName}: {userFields[fieldName]}
            </h6>
          ))}
        </ul>
      </div>
    );
  });
};
