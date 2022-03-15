import React from "react";
import InputStyle from "./Input.module.scss";
import plusLogo from "../../../../resources/img/plus.png";
import { useState } from "react";
import { db } from "../../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function Input() {
    const [task, setTask] = useState();
    const [taskComplete, setTaskComplete] = useState(false);
    const userID = Math.random().toString(36).substr(2);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "users"), {
            id: userID,
            tasks: task,
            complete: taskComplete,
        });
    };

    return (
        <form className={InputStyle.container} onSubmit={handleSubmit}>
            <button className={InputStyle.button}>
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
