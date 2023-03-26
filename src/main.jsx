import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfMTX9e873TFgVhmE6UQ-NWUR8bzrLCrE",
  authDomain: "mansion-ind.firebaseapp.com",
  projectId: "mansion-ind",
  storageBucket: "mansion-ind.appspot.com",
  messagingSenderId: "407951594534",
  appId: "1:407951594534:web:38c99ee874ff51838e02e7",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
