import { useState } from "react";
import FormStyle from "./SignInForm.module.scss";
import { auth } from "../../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

export default function SignInForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                if (!email) {
                    setErrorMessage("Enter valid e-mail");
                } else if (!password) {
                    setErrorMessage("Enter valid password");
                } else if (errorMessage.includes("invalid-email")) {
                    setErrorMessage("Enter valid email");
                } else if (errorMessage.includes("user-not-found")) {
                    setErrorMessage("User does not exist");
                } else if (errorMessage.includes("wrong-password")) {
                    setErrorMessage("Confirm email and password");
                }
            });
    };

    return (
        <form type="submit" className={FormStyle.form} onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="email"
                className={FormStyle.email}
                onChange={handleEmail}
            />
            <input
                type="password"
                placeholder="password"
                className={FormStyle.password}
                onChange={handlePassword}
            />
            <p className={FormStyle.error}>{errorMessage}</p>
            <button type="submit" className={FormStyle.signIn}>
                Sign In
            </button>
        </form>
    );
}
