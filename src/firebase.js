import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCgeq-xNKxx5UG_X-HkK9TTav8wwVmzHT0",
  authDomain: "auth-app-f5be4.firebaseapp.com",
  projectId: "auth-app-f5be4",
  storageBucket: "auth-app-f5be4.firebasestorage.app",
  messagingSenderId: "459689994295",
  appId: "1:459689994295:web:3b0f31702b99f6426cf7b2",
  measurementId: "G-QMJK133FPW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);