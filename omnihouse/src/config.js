import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyChSekinjV-_E8fqTjpScznG5MttfkdV80",
    authDomain: "omnihousereactapp.firebaseapp.com",
    databaseURL: "https://omnihousereactapp-default-rtdb.firebaseio.com",
    projectId: "omnihousereactapp",
    storageBucket: "omnihousereactapp.appspot.com",
    messagingSenderId: "412222196092",
    appId: "1:412222196092:web:bcbebcbaaac6027a8abcf9",
    measurementId: "G-59M2HQHNSB"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;