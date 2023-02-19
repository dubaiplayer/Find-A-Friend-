import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import { Signup } from "./Signup";
import { Homepage } from "./Homepage";
import { NoMatch } from "./NoMatch"
import { Profile } from "./Profile"
import { Signin }  from "./Signin"
import { Dashboard } from "./Dashboard";

export default function App() {
  const Routing = () => {
    return (
      <Routes>
        <Route path="/" index={true} element={<Homepage />} />
        <Route path="/Signup" index={true} element={<Signup />} />
        <Route path="*" index={true} element={<NoMatch />} />
        <Route path="/Profile" index={true} element={<Profile />} />
        <Route path="/Signin" index={true} element={<Signin />}/>
        <Route path="/Dashboard" index={true} element={<Dashboard/>}/>
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
