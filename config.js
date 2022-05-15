import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrQ5IjwFxi2KZiKFqezBVk23_jjEOfeL8",
  authDomain: "todo-43d89.firebaseapp.com",
  projectId: "todo-43d89",
  storageBucket: "todo-43d89.appspot.com",
  messagingSenderId: "253636476370",
  appId: "1:253636476370:web:e6aafefca6fc695b4f9c0b",
  measurementId: "G-YX6YFFC9PJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
