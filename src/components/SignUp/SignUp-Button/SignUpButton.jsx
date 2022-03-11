import SignUpButtonStyle from "./SignUpButton.module.scss"

export default function SignUpButton() {
    return (
        <button type="submit" className={SignUpButtonStyle.signUp}>Sign Up</button>
    )
}