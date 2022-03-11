import PropTypes from 'prop-types';
import { useState } from "react";
import Email from "./SignUp-Email/Email.jsx";
import Password from "./SignUp-Password/Password.jsx";
import PasswordConfirm from "./SignUp-PasswordConfirm/PasswordConfirm.jsx";
import SignUpButton from "./SignUp-Button/SignUpButton.jsx";
import SignUpStyle from "./SignUp.module.scss";
import SignInButton from './SIgnUp-SignInButton/SignInButton.jsx';

function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [psswordConfirm, setPasswordConfirm] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        password === psswordConfirm ? console.log("correct") : console.log("wrong");
    }

    return (
        <div className={SignUpStyle.body}>
            <div className={SignUpStyle.container}>
                <h1 className={SignUpStyle.message}>
                    Sign up to access Task Management
                </h1>
                <form type="submit" onSubmit={handleSubmit}  className={SignUpStyle.wrapper}>
                    <Email setEmail={setEmail} />
                    <Password setPassword={setPassword} />
                    <PasswordConfirm setPasswordConfirm={setPasswordConfirm} />
                    <SignUpButton />
                </form>
                <p className={SignUpStyle.text}>Already an user?</p>
                <SignInButton />
            </div>
        </div>
    );
}

SignUp.propTypes = {
    setEmail: PropTypes.func,
    setPassword: PropTypes.func,
    setPasswordConfirm: PropTypes.func
}

export default SignUp;
