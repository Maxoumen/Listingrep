// Remplace les valeurs ci-dessous par ta configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzL3AyyR8Vz9J2Trw_u4Kpo8gXrqtlLLQ",
  authDomain: "listingrep.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "1:XXXXXXXX:web:XXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
