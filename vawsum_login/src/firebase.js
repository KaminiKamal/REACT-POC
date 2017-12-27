import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCEsIu4VEnTMroWvVJl4gWF3mvceDqHdrU",
    authDomain: "goalcoach-67b4a.firebaseapp.com",
    databaseURL: "https://goalcoach-67b4a.firebaseio.com",
    projectId: "goalcoach-67b4a",
    storageBucket: "",
    messagingSenderId: "298580237177"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');