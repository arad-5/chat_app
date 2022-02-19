import firebase from 'firebase/compat/app'
import '@firebase/auth-compat'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: 'AIzaSyAhCjfjEb6t2zz4pr5vqwpsBWMdu1Mrsfk',
    authDomain: 'chat-app-82988.firebaseapp.com',
    projectId: 'chat-app-82988',
    storageBucket: 'chat-app-82988.appspot.com',
    messagingSenderId: '271261550',
    appId: '1:271261550:web:8ca7e1dc22df54a0386b7f',
    measurementId: 'G-N81DKY09C6',
}).auth();
    