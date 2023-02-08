import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "nwitter-5baf6",
  storageBucket: "nwitter-5baf6.appspot.com",
  messagingSenderId: "317410921354",
  appId: "1:317410921354:web:17ea85fa9d4c5aa4f85673"
};

export default firebase.initializeApp(firebaseConfig);