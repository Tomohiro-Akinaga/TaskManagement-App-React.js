/* React */
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* Component */
import Email from "./SignUp-Email/Email.jsx";
import Password from "./SignUp-Password/Password.jsx";
import PasswordConfirm from "./SignUp-PasswordConfirm/PasswordConfirm.jsx";
import SignUpButton from "./SignUp-Button/SignUpButton.jsx";
import SignInButton from "./SignUp-SignInButton/SignInButton.jsx";
/* CSS & Resources */
import SignUpStyle from "./SignUp.module.scss";
/* Firebase */
import auth from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp({ setUser }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        password === passwordConfirm
            ? createUser()
            : setErrorMessage("Password and Confirm Password does not match");
    }

    function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage.includes("admin-restricted-operation")) {
                    setErrorMessage("Enter e-mail and password");
                } else if (errorMessage.includes("invalid-password")) {
                    setErrorMessage("Password should be at least 6 characters");
                } else if (errorMessage.includes("email-already-in-use")) {
                    setErrorMessage("User already exsits");
                }
            });
    }

    return (
        <body className={SignUpStyle.body}>
            <div className={SignUpStyle.container}>
                <h1 className={SignUpStyle.message}>Create Account</h1>
                <form
                    type="submit"
                    onSubmit={handleSubmit}
                    className={SignUpStyle.wrapper}
                >
                    <Email setEmail={setEmail} />
                    <Password setPassword={setPassword} />
                    <PasswordConfirm setPasswordConfirm={setPasswordConfirm} />
                    <p className={SignUpStyle.error}>{errorMessage}</p>
                    <SignUpButton />
                </form>
                <p className={SignUpStyle.text}>Already an user ?</p>
                <SignInButton />
            </div>
        </body>
    );
}

SignUp.propTypes = {
    setUser: PropTypes.func,
};

export default SignUp;
