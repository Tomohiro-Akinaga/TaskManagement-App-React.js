import { useNavigate } from "react-router-dom";
import SignInButtonStyle from "./SignInButton.module.scss";

export default function SignInButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signin");
    };
    return (
        <button
            type="button"
            className={SignInButtonStyle.signIn}
            onClick={handleClick}
        >
            Sign In
        </button>
    );
}
