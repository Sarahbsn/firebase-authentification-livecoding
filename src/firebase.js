import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDW3qM7_Y3H6PLH1gHW58EDwrWVre5ltcQ",
	authDomain: "livecoding-authentification.firebaseapp.com",
	projectId: "livecoding-authentification",
	storageBucket: "livecoding-authentification.appspot.com",
	messagingSenderId: "427386840408",
	appId: "1:427386840408:web:2349d781a452fb64a0312d",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
