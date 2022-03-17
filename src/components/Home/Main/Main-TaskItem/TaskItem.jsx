import { db } from "../../../../firebaseConfig.js";
import {
    doc,
    updateDoc,
    getDoc,
    getDocs,
    collection,
    query,
    orderBy,
    deleteDoc,
} from "firebase/firestore";
import PropTypes from "prop-types";
import circle from "../../../../resources/img/circle.png";
import circleCheck from "../../../../resources/img/check-mark.png";
import trash from "../../../../resources/img/trash.png";
import TaskItemStyle from "./TaskItem.module.scss";
import { useState } from "react";
import { useEffect } from "react";

function TaskItem({ id, task, complete, setUsersData }) {
    const [isComplete, setIsComplete] = useState(complete);
    const [remove, setRemove] = useState(false);

    const handleClickCheck = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        const isComplete =
            docSnap._document.data.value.mapValue.fields.complete.booleanValue;
        const completeRef = doc(db, "users", id);
        await updateDoc(completeRef, {
            complete: !isComplete,
        });
        setIsComplete(!isComplete);
    };

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
    }, [isComplete]);

    const handleClickTrash = async () => {
        await deleteDoc(doc(db, "users", id));
        setRemove(!remove);
    };

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
    }, [remove]);

    return (
        <li
            className={TaskItemStyle.list}
            data-id={id}
            data-complete={complete}
        >
            <button
                className={TaskItemStyle.buttonCheck}
                onClick={handleClickCheck}
            >
                {!complete && (
                    <img src={circle} className={TaskItemStyle.imageCircle} />
                )}
                {complete && (
                    <img
                        src={circleCheck}
                        className={TaskItemStyle.imageCircle}
                    />
                )}
            </button>
            {complete && (
                <button
                    className={TaskItemStyle.buttonTrash}
                    onClick={handleClickTrash}
                >
                    <img src={trash} className={TaskItemStyle.imageTrash} />
                </button>
            )}
            <p className={TaskItemStyle.text}>{task}</p>
        </li>
    );
}

TaskItem.propTypes = {
    id: PropTypes.string,
    task: PropTypes.string,
    complete: PropTypes.bool,
};

export default TaskItem;
