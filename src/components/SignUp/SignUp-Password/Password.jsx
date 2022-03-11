import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import PasswordStyle from "./Password.module.scss";


export default function Password() {
    return (
        <div className={PasswordStyle.container}>
            <FontAwesomeIcon
                icon={faLock}
                className={PasswordStyle.icon}
            />
            <input
                type="text"
                className={PasswordStyle.password}
                placeholder="Password"
            />
        </div>
    );
};
