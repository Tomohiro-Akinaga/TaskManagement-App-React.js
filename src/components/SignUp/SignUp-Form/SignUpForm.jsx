import FormStyle from "./SignUpForm.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebaseConfig.js";

export default function SignUpForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        password === passwordConfirm
            ? createUser()
            : setErrorMessage("Confirm Password");
    };

    function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
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
                } else if (errorMessage.includes("email-already-in-us")) {
                    setErrorMessage("User already exist");
                } else if (errorMessage.includes("weak-password")) {
                    setErrorMessage("Password should be at least 6 characters");
                }
            });
    }

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
            <input
                type="password"
                placeholder="confirm password"
                className={FormStyle.passwordConfirm}
                onChange={handlePasswordConfirm}
            />
            <p className={FormStyle.error}>{errorMessage}</p>
            <button type="submit" className={FormStyle.signUp}>
                Sign Up
            </button>
        </form>
    );
}
