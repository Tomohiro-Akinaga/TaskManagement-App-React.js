import PropTypes from "prop-types";
import isImportantImg from "../../../../resources/img/whole-star.png";
import ImportantItemStyle from "./ImportantItem.module.scss";
import { db } from "../../../../firebaseConfig.js";
import { doc, updateDoc } from "firebase/firestore";

function ImportantItem({ task, id, setRemoveImportant }) {
    const handleClickImportant = async () => {
        const importantRef = doc(db, "users", id);
        await updateDoc(importantRef, {
            important: false,
        });
        setRemoveImportant(id);
    };

    return (
        <li className={ImportantItemStyle.list} data-id={id}>
            <button
                className={ImportantItemStyle.buttonImportant}
                onClick={handleClickImportant}
            >
                <img
                    src={isImportantImg}
                    className={ImportantItemStyle.imageImportant}
                />
            </button>
            <p className={ImportantItemStyle.text}>{task}</p>
        </li>
    );
}

ImportantItem.propTypes = {
    task: PropTypes.string,
    id: PropTypes.string,
    setRemoveImportant: PropTypes.func,
};

export default ImportantItem;
