import { useState } from "react";

/* Firebase SDK */
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

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

/* App Component */
function App() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signUp = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                errorCode === "auth/invalid-email" &&
                    alert("Email should be valid email");
                errorCode === "auth/weak-password" &&
                    alert("Password should be at least 6 characters");
                errorCode === "auth/email-already-in-use" &&
                    alert("Email is already in use");
                // ..
            });
    };

    const signIn = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                errorCode === "auth/invalid-email" &&
                    alert("Email should be valid email");
                errorCode === "auth/weak-password" &&
                    alert("Password should be at least 6 characters");
                errorCode === "auth/email-already-in-use" &&
                    alert("Email is already in use");
                // ..
            });

        const user = auth.currentUser;

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            console.log(user);
        } else {
            // No user is signed in.
            alert();
        }
    };

    return (
        <>
            <form onSubmit={signUp}>
                <input
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>

            <form onSubmit={signIn}>
                <input
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
        </>
    );
}

export default App;
