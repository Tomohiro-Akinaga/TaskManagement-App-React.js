import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import PasswordConfirmStyle from "./PasswordConfirm.module.scss";


export default function PasswordConfirm() {
    return (
        <div className={PasswordConfirmStyle.container}>
            <FontAwesomeIcon
                icon={faLock}
                className={PasswordConfirmStyle.icon}
            />
            <input
                type="text"
                className={PasswordConfirmStyle.password}
                placeholder="Confirm Password"
            />
        </div>
    );
};
