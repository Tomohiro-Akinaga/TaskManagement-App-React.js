import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonStyle from "./Button.module.scss";

export default function Button() {
    return (
        <button className={ButtonStyle.button}>
            <FontAwesomeIcon icon={faStar} className={ButtonStyle.icon}/>
        </button>
    );
}
