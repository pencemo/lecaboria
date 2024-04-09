// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpv2gHcD5OtWDbMeiMZyMFs1Jy1Ldc4vw",
  authDomain: "fir-6bba5.firebaseapp.com",
  projectId: "fir-6bba5",
  storageBucket: "fir-6bba5.appspot.com",
  messagingSenderId: "213726878036",
  appId: "1:213726878036:web:2e00bc49364725c03190c1",
  measurementId: "G-Z7C72TEJJP"
};

export default firebase.initializeApp(firebaseConfig);