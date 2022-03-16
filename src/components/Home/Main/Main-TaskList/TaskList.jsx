import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig.js";
import TaskItem from "../Main-TaskItem/TaskItem.jsx";

export default function TaskList() {
    const [usersData, setUsersData] = useState();
    const tasks = [];

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
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
            tasks.push(user);
        });
    }
    return <ul>{tasks.length !== 0 && <TaskItem id={tasks.id} />}</ul>;
}

// {tasks && tasks.map((item) => {
//     <TaskItem
//     id={item.id}
//     tasks={item.tasks}
//     complete={item.complete}
//     />
// })}
