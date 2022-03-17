import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonStyle from "./Button.module.scss";

function Button({ important, setImportant }) {
    const handleClick = () => {
        setImportant(!important);
    };

    return (
        <button className={ButtonStyle.button} onClick={handleClick}>
            <FontAwesomeIcon icon={faStar} className={ButtonStyle.icon} />
        </button>
    );
}

Button.propTypes = {
    important: PropTypes.bool,
    setImportant: PropTypes.func,
};

export default Button;
