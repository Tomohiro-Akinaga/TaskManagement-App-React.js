import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebaseConfig.js";
import TaskItem from "../Main-TaskItem/TaskItem.jsx";
import TaskListStyle from "./TaskList.module.scss";
import helperCheckCompleteExist from "./helperCheckCompleteExist.js";
import { auth } from "../../../../firebaseConfig.js";

function TaskList({ form }) {
    const [usersData, setUsersData] = useState();
    const [heading, setHeading] = useState(false);
    const tasks = [];

    useEffect(() => {
        let unmounted = false;
        if (!auth.currentUser) {
            return null;
        }
        const userEmail = auth.currentUser.email;
        (async () => {
            const usersRef = collection(db, userEmail);
            const q = query(usersRef, orderBy("timestamp"));
            const querySnapshot = await getDocs(q);
            if (!unmounted) {
                setUsersData(querySnapshot.docs);
            }
        })();
        return () => (unmounted = true);
    }, [form]);

    if (usersData) {
        usersData.forEach((item) => {
            const user = {};
            user.id = item.id;
            user.task =
                item._document.data.value.mapValue.fields.tasks.stringValue;
            user.complete =
                item._document.data.value.mapValue.fields.complete.booleanValue;
            user.important =
                item._document.data.value.mapValue.fields.important.booleanValue;
            user.timestamp =
                item._document.data.value.mapValue.fields.timestamp.timestampValue;
            tasks.push(user);
        });
    }

    const completeTaskExist = helperCheckCompleteExist(tasks);

    return (
        <div className={TaskListStyle.container}>
            <ul className={TaskListStyle.list}>
                {tasks.map(
                    (item) =>
                        !item.complete && (
                            <TaskItem
                                key={item.id}
                                id={item.id}
                                task={item.task}
                                complete={item.complete}
                                important={item.important}
                                setUsersData={setUsersData}
                            />
                        )
                )}
            </ul>
            {completeTaskExist && (
                <p className={TaskListStyle.heading}>Completed</p>
            )}
            <ul className={TaskListStyle.listComplete}>
                {tasks.map(
                    (item) =>
                        item.complete && (
                            <TaskItem
                                key={item.id}
                                id={item.id}
                                task={item.task}
                                complete={item.complete}
                                setUsersData={setUsersData}
                            />
                        )
                )}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    form: PropTypes.string,
};

export default TaskList;
