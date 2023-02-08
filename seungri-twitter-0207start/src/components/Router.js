import React, {useState} from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation/>}
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: 890,
        width: "100%",
        margin: "0 auto",
        marginTop: 80,
      }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj}/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </>
          ) : (
            <>
              <Route path="/" element={<Auth/>}/>
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;