import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKIWbbwfbhBiS6avLOlHmTHoIq4v4i2dE",
    authDomain: "task-management-react-ap-fce44.firebaseapp.com",
    projectId: "task-management-react-ap-fce44",
    storageBucket: "task-management-react-ap-fce44.appspot.com",
    messagingSenderId: "90361277252",
    appId: "1:90361277252:web:8ef50c468d0c38c2ffc511",
    measurementId: "G-VQQ2SMN9X6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
