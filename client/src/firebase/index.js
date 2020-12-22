import firebase from 'firebase/app'
import 'firebase/storage';

var firebaseConfig = {
	apiKey: process.env.REACT_APP_FS_API_KEY,
	authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FS_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FS_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export { storage, firebase as default }