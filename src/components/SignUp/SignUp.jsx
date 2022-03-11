import Email from "./SignUp-Email/Email.jsx";
import Password from "./SignUp-Password/Password.jsx";
import PasswordConfirm from "./SignUp-PasswordConfirm/PasswordConfirm.jsx";
import SignUpButton from "./SignUp-Button/SignUpButton.jsx";
import SignUpStyle from "./SignUp.module.scss";
import SignInButton from "../SignIn/SignIn-Button/SignInButton.jsx";

export default function SignUp() {
    return (
        <div className={SignUpStyle.body}>
            <div className={SignUpStyle.container}>
                <h1 className={SignUpStyle.message}>
                    Sign up to access Task Management
                </h1>
                <form action="submit" className={SignUpStyle.wrapper}>
                    <Email />
                    <Password />
                    <PasswordConfirm />
                    <SignUpButton />
                </form>
                <p className={SignUpStyle.text}>Already an user?</p>
                <SignInButton />
            </div>
        </div>
    );
}
