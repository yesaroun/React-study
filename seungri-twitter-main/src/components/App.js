import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { auth } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    // https://firebase.google.com/docs/auth/web/manage-users?hl=ko
    auth.onAuthStateChanged((user) => {
      console.log("user")
      console.log(user)

      if (user) {
        setIsLoggedIn(true);
        setUserObj(user)
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;