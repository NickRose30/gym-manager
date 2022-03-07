import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvGe9Prt38Jl9gZB7w2DxeImmRtUUdRm8",
  authDomain: "gym-manager-28e31.firebaseapp.com",
  projectId: "gym-manager-28e31",
  storageBucket: "gym-manager-28e31.appspot.com",
  messagingSenderId: "373180132882",
  appId: "1:373180132882:web:c223541986cea79aae32cb",
  measurementId: "G-G7JVVBY6HS"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default () => initializeApp(firebaseConfig);