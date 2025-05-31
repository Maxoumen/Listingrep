// Remplace les valeurs ci-dessous par ta configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzL3AyyR8Vz9J2Trw_u4Kpo8gXrqtlLLQ",
  authDomain: "listingrep.firebaseapp.com",
  projectId: "listingrep",
  storageBucket: "listingrep.firebasestorage.app",
  messagingSenderId: "415040498064",
  appId: "1:415040498064:web:aee5a0e3abfffe84786b15",
  measurementId: "G-D56JRGQMCW"

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
