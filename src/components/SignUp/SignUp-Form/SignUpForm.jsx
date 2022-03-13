import FormStyle from "./SignUpForm.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

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
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefalut();
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
                placeholder="password"
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
