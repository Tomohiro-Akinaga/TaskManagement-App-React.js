import ImportantListStyle from "./ImportantList.module.scss";
import isImportantImg from "../../../../resources/img/whole-star.png";

export default function ImportantList() {
    return (
        <div className={ImportantListStyle.container}>
            <ul>
                <li
                    className={ImportantListStyle.list}
                    // data-id={id}
                    // data-complete={complete}
                    // data-important={important}
                >
                    <button
                        className={ImportantListStyle.buttonImportant}
                        // onClick={handleClickImportant}
                    >
                        <img
                            src={isImportantImg}
                            className={ImportantListStyle.imageImportant}
                        />
                    </button>
                    <p className={ImportantListStyle.text}></p>
                </li>
            </ul>
        </div>
    );
}
