import DisplayTime from "./Header-DisplayTime/DisplayTime.jsx";
import ImportantButton from "./Header-ImportantButton/ImportantButton.jsx";
import SignOut from "./Header-SignOutButton/SignOut.jsx";
import HeaderStyle from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Header({ important, setImportant }) {
    return (
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.left}>
                <DisplayTime />
            </div>
            <div className={HeaderStyle.right}>
                <ImportantButton
                    important={important}
                    setImportant={setImportant}
                />
                <SignOut />
            </div>
        </header>
    );
}

Header.propTypes = {
    important: PropTypes.bool,
    setImportant: PropTypes.func,
};

export default Header;
