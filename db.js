import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4IYn2udSIX8BruCOJfweUoOutQrVcy90",
  authDomain: "hello-e7481.firebaseapp.com",
  projectId: "hello-e7481",
  storageBucket: "hello-e7481.appspot.com",
  messagingSenderId: "740860273912",
  appId: "1:740860273912:web:6f168036f12fbeaa24870d",
  measurementId: "G-TRCKWY6B30"
};
  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
   } //connects fb -> BE

 export const firestore = firebase.firestore(); 
  // As we can use firestore in other components also, we have to
  // export it.