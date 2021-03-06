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
import { auth } from "../../../../firebaseConfig.js";
import PropTypes from "prop-types";
import circleImg from "../../../../resources/img/circle.png";
import circleCheckImg from "../../../../resources/img/check-mark.png";
import trashImg from "../../../../resources/img/trash.png";
import importantImg from "../../../../resources/img/important.png";
import isImportantImg from "../../../../resources/img/whole-star.png";
import TaskItemStyle from "./TaskItem.module.scss";
import { useState } from "react";
import { useEffect } from "react";

function TaskItem({ id, task, complete, important, setUsersData, userEmail }) {
    const [isComplete, setIsComplete] = useState(complete);
    const [remove, setRemove] = useState(false);
    const [isImportant, setIsImportant] = useState(false);

    const handleClickCheck = async () => {
        const docRef = doc(db, userEmail, id);
        const docSnap = await getDoc(docRef);
        const isComplete =
            docSnap._document.data.value.mapValue.fields.complete.booleanValue;
        const completeRef = doc(db, userEmail, id);
        await updateDoc(completeRef, {
            complete: !isComplete,
            important: false,
        });
        setIsComplete(!isComplete);
    };

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const usersRef = collection(db, userEmail);
            const q = query(usersRef, orderBy("timestamp"));
            const querySnapshot = await getDocs(q);

            if (!unmounted) {
                setUsersData(querySnapshot.docs);
            }
        })();
        return () => (unmounted = true);
    }, [isComplete]);

    const handleClickTrash = async () => {
        await deleteDoc(doc(db, userEmail, id));
        setRemove(!remove);
    };

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const usersRef = collection(db, userEmail);
            const q = query(usersRef, orderBy("timestamp"));
            const querySnapshot = await getDocs(q);

            if (!unmounted) {
                setUsersData(querySnapshot.docs);
            }
        })();
        return () => (unmounted = true);
    }, [remove]);

    const handleClickImportant = async () => {
        const docRef = doc(db, userEmail, id);
        const docSnap = await getDoc(docRef);
        const important =
            docSnap._document.data.value.mapValue.fields.important.booleanValue;
        const importantRef = doc(db, userEmail, id);
        await updateDoc(importantRef, {
            important: !isImportant,
        });
        setIsImportant(!isImportant);
    };

    useEffect(() => {
        let unmounted = false;
        (async () => {
            const usersRef = collection(db, userEmail);
            const q = query(usersRef, orderBy("timestamp"));
            const querySnapshot = await getDocs(q);

            if (!unmounted) {
                setUsersData(querySnapshot.docs);
            }
        })();
        return () => (unmounted = true);
    }, [isImportant]);

    return (
        <li
            className={TaskItemStyle.list}
            data-id={id}
            data-complete={complete}
            data-important={important}
        >
            <button
                className={TaskItemStyle.buttonCheck}
                onClick={handleClickCheck}
            >
                {!complete && (
                    <img
                        src={circleImg}
                        className={TaskItemStyle.imageCircle}
                    />
                )}
                {complete && (
                    <img
                        src={circleCheckImg}
                        className={TaskItemStyle.imageCircle}
                    />
                )}
            </button>
            {!complete && (
                <button
                    className={TaskItemStyle.buttonTrash}
                    onClick={handleClickImportant}
                >
                    <img
                        src={!important ? importantImg : isImportantImg}
                        className={TaskItemStyle.imageImportant}
                    />
                </button>
            )}
            {complete && (
                <button
                    className={TaskItemStyle.buttonTrash}
                    onClick={handleClickTrash}
                >
                    <img src={trashImg} className={TaskItemStyle.imageTrash} />
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
    userEmail: PropTypes.string,
};

export default TaskItem;
