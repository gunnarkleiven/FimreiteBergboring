import firebase from "firebase";
import "firebase/database";

let firebaseConfig = {
    apiKey: "AIzaSyDfiEARBs6THTBto9ZSgQMjvIodygUVgwQ",
    authDomain: "fimreitebergboring.firebaseapp.com",
    databaseURL: "https://fimreitebergboring-default-rtdb.firebaseio.com",
    projectId: "fimreitebergboring",
    storageBucket: "fimreitebergboring.appspot.com",
    messagingSenderId: "987058696398",
    appId: "1:987058696398:web:30bfc3e69e4eb57ee5a09f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();