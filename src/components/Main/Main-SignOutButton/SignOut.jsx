import auth from "../../../firebaseConfig.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

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
        <button type="button" onClick={handleClick}>
            Sign Out
        </button>
    );
}
