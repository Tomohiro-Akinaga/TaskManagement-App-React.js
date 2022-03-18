import TaskList from "./Main-TaskList/TaskList.jsx";
import Input from "./Main-Input/Input.jsx";
import MainStyle from "./Main.module.scss";
import ImportantList from "./Main-ImportantList/ImportantList.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Main({ important, userEmail }) {
    const [form, setForm] = useState();
    return (
        <main className={MainStyle.container}>
            {!important && <TaskList form={form} userEmail={userEmail} />}
            {important && (
                <ImportantList important={important} userEmail={userEmail} />
            )}
            <Input setForm={setForm} userEmail={userEmail} />
        </main>
    );
}

Main.propTypes = {
    important: PropTypes.bool,
    userEmail: PropTypes.string,
};
