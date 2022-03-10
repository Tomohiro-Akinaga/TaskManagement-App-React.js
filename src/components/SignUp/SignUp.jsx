/* Fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
/* CSS */
import SignUpStyle from "./SignUp.module.scss";

export default function SignUp() {
    return (
        <div className={SignUpStyle.container}>
            <p className={SignUpStyle.welcomeMessage}>
                Hey, Welcome.
                <br />
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
                    Sign Up
                </button>
                <div className={SignUpStyle.signInContainer}>
                    <p className={SignUpStyle.signInMessage}>
                        Already a Member?
                    </p>
                    <button
                        type="button"
                        className={SignUpStyle.signIn}
                    ></button>
                </div>
            </form>
        </div>
    );
}
