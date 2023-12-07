import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD1rwEhG82QioI0tBbYoEVi5NYwzjYirpc",
  authDomain: "biblioteca-c6.firebaseapp.com",
  projectId: "biblioteca-c6",
  storageBucket: "biblioteca-c6.appspot.com",
  messagingSenderId: "43049257269",
  appId: "1:43049257269:web:711e1d6bb609a7bbf4647c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
