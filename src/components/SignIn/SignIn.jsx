import SignInForm from "./SignIn-Form/SignInForm.jsx";
import SignInStyle from "./SignIn.module.scss";
import illust from "../../resources/img/signin.jpg";

export default function SignIn() {
    return (
        <div className={SignInStyle.container}>
            <div className={SignInStyle.illust}>
                <img src={illust} className={SignInStyle.img} />
            </div>
            <div className={SignInStyle.wrapper}>
                <h1 className={SignInStyle.title}>
                    Welcome to <br />
                    To Do App
                </h1>
                <h2 className={SignInStyle.subtitle}>Sign In Account</h2>
                <div className={SignInStyle.form}>
                    <SignInForm />
                </div>
                <p className={SignInStyle.text}>No account ?</p>
                <a className={SignInStyle.link}>Sign up for free </a>
            </div>
        </div>
    );
}
