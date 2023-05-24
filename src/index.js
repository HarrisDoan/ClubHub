import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkrafwTirf4tDBD7AnaiDGwSo2ToaaKH0",
  authDomain: "clubhub-36763.firebaseapp.com",
  projectId: "clubhub-36763",
  storageBucket: "clubhub-36763.appspot.com",
  messagingSenderId: "513577731707",
  appId: "1:513577731707:web:9939c76e3aa56daa0304de",
  measurementId: "G-D3M3GYJWWR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
