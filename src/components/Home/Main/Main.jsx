import TaskList from "./Main-TaskList/TaskList.jsx";
import Input from "./Main-Input/Input.jsx";
import MainStyle from "./Main.module.scss";
import { useState } from "react";

export default function Main() {
    const [form, setForm] = useState();

    return (
        <main className={MainStyle.container}>
            <TaskList form={form} />
            <Input setForm={setForm} />
        </main>
    );
}
