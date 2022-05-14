import  firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyB6FlW9B35eue7OrDhVzoSST9A4esC6szo",
    authDomain: "netflix-kc-b5015.firebaseapp.com",
    projectId: "netflix-kc-b5015",
    storageBucket: "netflix-kc-b5015.appspot.com",
    messagingSenderId: "446002468",
    appId: "1:446002468:web:1c190c56a7fb4bb4412fb1"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth(firebaseApp);


