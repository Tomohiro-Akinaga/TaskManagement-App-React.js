import auth from "../../../firebaseConfig.js";
import { signOut } from "firebase/auth";

export default function SignOut(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            props.setUser({});
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log("error");
          });
    };
    return (
        <button type="submit" onSubmit={handleSubmit}>
            Sign Out
        </button>
    );
}
