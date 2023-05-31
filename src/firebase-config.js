import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCitE9obgzwqgjxUaqLjO8U4lAdPWLN_Zk",
  authDomain: "form-2-9f3ab.firebaseapp.com",
  projectId: "form-2-9f3ab",
  storageBucket: "form-2-9f3ab.appspot.com",
  messagingSenderId: "227915690110",
  appId: "1:227915690110:web:7e3001d07d6a56c850682f"
};

const appFirebase = initializeApp(firebaseConfig)

export default appFirebase;