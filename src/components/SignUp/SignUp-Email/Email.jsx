import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import EmailStyle from "./Email.module.scss";


export default function Email({setEmail}) {
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className={EmailStyle.container}>
            <FontAwesomeIcon
                icon={faEnvelope}
                className={EmailStyle.icon}
            />
            <input
                type="text"
                className={EmailStyle.email}
                placeholder="E-mail"
                onChange={handleChange}
            />
        </div>
    );
};
