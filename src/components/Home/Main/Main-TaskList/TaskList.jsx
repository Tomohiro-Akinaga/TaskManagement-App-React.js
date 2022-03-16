import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebaseConfig.js";
import TaskItem from "../Main-TaskItem/TaskItem.jsx";
import TaskListStyle from "./TaskList.module.scss";

export default function TaskList() {
    const [usersData, setUsersData] = useState();
    const tasks = [];

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const usersRef = collection(db, "users");
            const q = query(usersRef, orderBy("timestamp"));
            const querySnapshot = await getDocs(q);

            if (!unmounted) {
                setUsersData(querySnapshot.docs);
            }
        })();
        return () => (unmounted = true);
    }, []);

    if (usersData) {
        usersData.forEach((item) => {
            const user = {};
            user.id = item.id;
            user.task =
                item._document.data.value.mapValue.fields.tasks.stringValue;
            user.complete =
                item._document.data.value.mapValue.fields.complete.booleanValue;
            user.timestamp =
                item._document.data.value.mapValue.fields.timestamp.timestampValue;
            tasks.push(user);
        });
    }

    return (
        <ul className={TaskListStyle.container}>
            {tasks.map((item, index) => (
                <TaskItem
                    key={index}
                    id={item.id}
                    task={item.task}
                    complete={item.complete}
                />
            ))}
        </ul>
    );
}
