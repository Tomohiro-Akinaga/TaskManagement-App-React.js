import { useNavigate } from "react-router-dom";
import SignUpStyle from "./SignUp.module.scss";
import illust from "../../resources/img/signup.jpg";
import SignUpForm from "./SignUp-Form/SignUpForm.jsx";

export default function SignUp() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin");
    };

    return (
        <div className={SignUpStyle.container}>
            <div className={SignUpStyle.illust}>
                <img src={illust} className={SignUpStyle.img} />
            </div>
            <div className={SignUpStyle.wrapper}>
                <h1 className={SignUpStyle.title}>
                    Welcome to <br />
                    To Do App
                </h1>
                <div className={SignUpStyle.form}>
                    <h2 className={SignUpStyle.subtitle}>Sign up account</h2>
                    <SignUpForm />
                </div>
                <div className={SignUpStyle.signUp}>
                    <p className={SignUpStyle.text}>
                        Already have an account ?
                    </p>
                    <a className={SignUpStyle.link} onClick={handleSignIn}>
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    );
}
