import FormStyle from "./SignInForm.module.scss";

export default function SignInForm() {
    return (
        <form type="submit" className={FormStyle.form}>
            <input type="text" placeholder="email" className={FormStyle.email} />
            <input type="text" className={FormStyle.password} />
            <button type="submit" className={FormStyle.signIn}></button>
        </form>
    );
}
