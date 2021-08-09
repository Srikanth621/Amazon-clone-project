import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQztqq6P-b5OmPGTb0gwgkrtHlb8_unx4",
  authDomain: "e-clone-7bb63.firebaseapp.com",
  databaseURL: "https://e-clone-7bb63.firebaseio.com",
  projectId: "e-clone-7bb63",
  storageBucket: "e-clone-7bb63.appspot.com",
  messagingSenderId: "205604775621",
  appId: "1:205604775621:web:5fb90a5d09b542017732ac",
  measurementId: "G-1HSN6YHJ3N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export default db;
export { auth };
