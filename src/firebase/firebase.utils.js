import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyCIbJiTy4sH1kE6LQPjDJRqPKQ9c1Vsaro",
	authDomain: "crwn-db-6474b.firebaseapp.com",
	databaseURL: "https://crwn-db-6474b.firebaseio.com",
	projectId: "crwn-db-6474b",
	storageBucket: "crwn-db-6474b.appspot.com",
	messagingSenderId: "446242664153",
	appId: "1:446242664153:web:102947c3268e4bf25758c8",
	measurementId: "G-V6V4N83RZZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
