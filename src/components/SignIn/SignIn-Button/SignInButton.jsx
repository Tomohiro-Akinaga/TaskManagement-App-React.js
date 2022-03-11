import SignInButtonStyle from "./SignInButton.module.scss";

export default function SignInButton() {
    return (
        <button type="button" className={SignInButtonStyle.signIn}>
            Sign In
        </button>
    );
}
