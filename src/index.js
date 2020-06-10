import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjmBcgSJFus0qO8SOOvKZFZyK3_-Xtuxk",
  authDomain: "sheridan-coop.firebaseapp.com",
  databaseURL: "https://sheridan-coop.firebaseio.com",
  projectId: "sheridan-coop",
  storageBucket: "sheridan-coop.appspot.com",
  messagingSenderId: "673430673134",
  appId: "1:673430673134:web:d345d4bbad745a3d3885ff",
  measurementId: "G-DL8QBFDNP3"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
