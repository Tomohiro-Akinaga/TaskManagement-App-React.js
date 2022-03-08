/* Firebase SDK */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, "test@gmail.com", "test123")
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="E-mail"
                    onChange={(event) => console.log(event)}
                ></input>
                <button type="button">Sign Up</button>
            </form>
        </>
    );
}

export default App;
