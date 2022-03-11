/* React */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* Component */
import Email from "./SignUp-Email/Email.jsx";
import Password from "./SignUp-Password/Password.jsx";
import PasswordConfirm from "./SignUp-PasswordConfirm/PasswordConfirm.jsx";
import SignUpButton from "./SignUp-Button/SignUpButton.jsx";
import SignUpStyle from "./SignUp.module.scss";
import SignInButton from "./SignUp-SignInButton/SignInButton.jsx";
/* Firebase */
import auth from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        password === passwordConfirm ? createUser() : setError(true);
    };

    function createUser() {
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

    return (
        <div className={SignUpStyle.body}>
            <div className={SignUpStyle.container}>
                <h1 className={SignUpStyle.message}>
                    Sign up to access Task Management
                </h1>
                <form
                    type="submit"
                    onSubmit={handleSubmit}
                    className={SignUpStyle.wrapper}
                >
                    <Email setEmail={setEmail} />
                    <Password setPassword={setPassword} />
                    <PasswordConfirm setPasswordConfirm={setPasswordConfirm} />
                    <div className={SignUpStyle.errorContainer}>
                        {error && (
                            <p className={SignUpStyle.error}>
                                Password and Confirm Password does not match
                            </p>
                        )}
                    </div>
                    <SignUpButton />
                </form>
                <p className={SignUpStyle.text}>Already an user ?</p>
                <SignInButton />
            </div>
        </div>
    );
}

SignUp.propTypes = {
    setEmail: PropTypes.func,
    setPassword: PropTypes.func,
    setPasswordConfirm: PropTypes.func,
};

export default SignUp;
