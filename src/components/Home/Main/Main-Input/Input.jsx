import React from "react";
import PropTypes from "prop-types";
import InputStyle from "./Input.module.scss";
import plusLogo from "../../../../resources/img/plus.png";
import { useState } from "react";
import { db } from "../../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../../../firebaseConfig.js";

function Input({ setForm }) {
    const [task, setTask] = useState();
    const [taskComplete, setTaskComplete] = useState(false);
    const [important, setImportant] = useState(false);
    const time = new Date();

    if (!auth.currentUser) {
        return null;
    }

    const userEmail = auth.currentUser.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, userEmail), {
            tasks: task,
            complete: taskComplete,
            important: important,
            timestamp: time,
        });
        setForm(task);
        setTask();
        e.target.reset();
    };

    return (
        <form
            type="submit"
            className={InputStyle.container}
            onSubmit={handleSubmit}
        >
            <button type="submit" className={InputStyle.button}>
                <img src={plusLogo} className={InputStyle.plusLogo} />
            </button>
            <input
                type="text"
                className={InputStyle.input}
                placeholder="Add a task"
                onChange={(e) => setTask(e.target.value)}
            />
        </form>
    );
}

Input.propTypes = {
    setForm: PropTypes.func,
};

export default Input;
