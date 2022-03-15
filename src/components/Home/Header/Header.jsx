import DisplayTime from "./Header-DisplayTime/DisplayTime.jsx";
import ImportantButton from "./Header-ImportantButton/ImportantButton.jsx";
import SignOut from "./Header-SignOutButton/SignOut.jsx";
import HeaderStyle from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.left}>
                {/* <FontAwesomeIcon
                    icon={faLaptopHouse}
                    className={HeaderStyle.icon}
                /> */}
                {/* <h1 className={HeaderStyle.title}>To Do App</h1> */}
                <DisplayTime />
            </div>
            <div className={HeaderStyle.right}>
                <ImportantButton />
                <SignOut />
            </div>
        </header>
    );
}
