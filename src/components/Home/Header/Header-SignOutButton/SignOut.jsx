import { auth } from "../../../../firebaseConfig.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import SignOutStyle from "./SignOutButton.module.scss";

export default function SignOut() {
    const navigate = useNavigate();

    const handleClick = () => {
        signOut(auth)
            .then(() => {
                navigate("/signin");
            })
            .catch((error) => {
                alert("Error");
            });
    };
    return (
        <button
            type="button"
            onClick={handleClick}
            className={SignOutStyle.button}
        >
            Sign Out
        </button>
    );
}
