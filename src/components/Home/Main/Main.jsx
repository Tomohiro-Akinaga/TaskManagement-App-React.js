import TaskList from "./Main-TaskList/TaskList.jsx";
import Input from "./Main-Input/Input.jsx";
import MainStyle from "./Main.module.scss";

export default function Main() {
    return (
        <main className={MainStyle.container}>
            <TaskList />
            <Input />
        </main>
    );
}
