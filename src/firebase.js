import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBW76505WeQ4Gsn0VWScl5Gk8Wab7nUtsc',
  authDomain: 'tinder-clone-5af2d.firebaseapp.com',
  databaseURL: 'https://tinder-clone-5af2d.firebaseio.com',
  projectId: 'tinder-clone-5af2d',
  storageBucket: 'tinder-clone-5af2d.appspot.com',
  messagingSenderId: '1040764223095',
  appId: '1:1040764223095:web:25a82e068336326df61072',
  measurementId: 'G-Y0V6KH4XDY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
