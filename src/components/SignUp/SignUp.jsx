/* React */
import { useState } from "react";
/* Firebase */
import app from "../../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
/* Fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
/* css */
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
    const [signUp, setSignUp] = useState(true);
    return (
        <div className={SignUpStyle.container}>
            <p className={SignUpStyle.welcomeMessage}>
                Hey, Welcome.
                <br />
                {signUp ? `Sign up ` : `Sign in `}
                to access Task Management
            </p>
            <form action="submit" className={SignUpStyle.wrapper}>
                <div className={SignUpStyle.emailContainer}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={SignUpStyle.emailIcon}
                    />
                    <input
                        type="text"
                        className={SignUpStyle.email}
                        placeholder="E-mail"
                    />
                </div>
                <div className={SignUpStyle.passwordContainer}>
                    <FontAwesomeIcon
                        icon={faLock}
                        className={SignUpStyle.passwordIcon}
                    />
                    <input
                        type="text"
                        className={SignUpStyle.password}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className={SignUpStyle.signUp}>
                    {signUp ? `Sign Up` : `Sign In`}
                </button>
                <div className={SignUpStyle.signInContainer}>
                    <p className={SignUpStyle.signInMessage}>
                        {signUp ? `Already a Member?` : `Not a member yet?`}
                    </p>
                    <button
                        type="button"
                        onClick={() => setSignUp(!signUp)}
                        className={SignUpStyle.signIn}
                    >
                        {signUp ? `Sign In` : `Sign Up`}
                    </button>
                </div>
            </form>
        </div>
    );
}
