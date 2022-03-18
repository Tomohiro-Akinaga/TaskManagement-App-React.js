import ImportantListStyle from "./ImportantList.module.scss";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../firebaseConfig.js";
import ImportantItem from "../Main-ImportantItem/ImportantItem.jsx";
import PropTypes from "prop-types";

function ImportantList({ userEmail }) {
    const [usersData, setUsersData] = useState();
    const [removeImportant, setRemoveImportant] = useState();
    const tasks = [];

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
    }, [removeImportant]);

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
    return (
        <div className={ImportantListStyle.container}>
            <ul>
                {tasks.map(
                    (item, index) =>
                        item.important && (
                            <ImportantItem
                                task={item.task}
                                key={index}
                                id={item.id}
                                complete={item.complete}
                                important={item.important}
                                timestamp={item.timestamp}
                                setRemoveImportant={setRemoveImportant}
                                userEmail={userEmail}
                            />
                        )
                )}
            </ul>
        </div>
    );
}

ImportantList.propTypes = {
    userEmail: PropTypes.string,
};

export default ImportantList;
