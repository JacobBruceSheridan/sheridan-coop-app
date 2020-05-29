import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import * as firebase from 'firebase';


function App() {
  const localStorageUser = JSON.parse(window.localStorage.getItem('user')) || {};
  const [user, setUser] = useState(localStorageUser);

  const auth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let tempUser = {};
    firebase.auth().signInWithPopup(provider).then(result => {
      tempUser = result.user;
      window.localStorage.setItem('user', JSON.stringify(tempUser));
      setUser(tempUser);
    }).then(() => {
      const db = firebase.firestore();
      db.collection("users").get().then(function (querySnapshot) {
        let userFound = false;
        querySnapshot.forEach(function (doc) {
          if (doc.data().id === tempUser.uid) userFound = true;
        });
        if (!userFound) {
          db.collection("users").doc(tempUser.uid).set({
            name: tempUser.displayName,
            email: tempUser.email,
            photoURL: tempUser.photoURL
          })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });
        }
      });
    });
  }

  const signOut = () => {
    window.localStorage.removeItem('user');
    setUser({});
  }

  return (
    <div>
      {user.displayName ?
        <Dashboard signOut={signOut} />
        :
        <Login auth={auth} />
      }
    </div>
  );
}

export default App;
