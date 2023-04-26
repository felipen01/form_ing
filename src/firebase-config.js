import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA-g_nvZviL3ZJqllfoUtZ6qK_pJpyCD5Q",
    authDomain: "form-ing.firebaseapp.com",
    projectId: "form-ing",
    storageBucket: "form-ing.appspot.com",
    messagingSenderId: "835052112909",
    appId: "1:835052112909:web:0c4a599753a2de40411944"
  };

const appFirebase = initializeApp(firebaseConfig)

export default appFirebase;