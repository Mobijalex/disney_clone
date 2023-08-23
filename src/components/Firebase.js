import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLjrq-tn-7_ovKQNnu1XQalqCMX1Dt268",
  authDomain: "disneyplus-clone-1581f.firebaseapp.com",
  projectId: "disneyplus-clone-1581f",
  storageBucket: "disneyplus-clone-1581f.appspot.com",
  messagingSenderId: "284889588911",
  appId: "1:284889588911:web:b5209b4ba9c13f2403605a",
  measurementId: "G-QD0CPC864G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
