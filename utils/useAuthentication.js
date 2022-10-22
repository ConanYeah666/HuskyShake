import React from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import app from '../config/firebase';

import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

const after = (user) => {
    if (user) {
      console.log("yes")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
    } else {
      // User is signed out
      setUser(undefined);
    }
  }
export function useAuthentication() {
  const [user, setUser] = React.useState(user);
  
    console.log("yes")
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {after});

    return unsubscribeFromAuthStatuChanged;
  

  return {
    user
  };
}