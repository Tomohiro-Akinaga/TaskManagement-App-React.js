import auth from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function useCreateUser() {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            props.setUser(user);
            navigate("/");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
            // ..
        });
}
