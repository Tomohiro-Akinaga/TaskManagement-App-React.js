import app from "../../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUpStyle from "./SignUp.module.scss";

const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });

export default function SignUp() {
    return (
        <div className={SignUpStyle.container}>
            <p className={SignUpStyle.message}>Hey, Welcome.<br />Signup to access Task Management</p>
            <form action="submit" className={SignUpStyle.wrapper}>
                <input type="text" className={SignUpStyle.email}/>
                <input type="text" className={SignUpStyle.password}/>
                <button type="submit" className={SignUpStyle.signUp}>SignUp</button>
            </form>
        </div>
    )
}
