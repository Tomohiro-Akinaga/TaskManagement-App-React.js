import cirlce from "../../../../resources/img/circle.png";
import TaskItemStyle from "./TaskItem.module.scss";

export default function TaskItem(props) {
    console.log(props);
    return (
        <li className={TaskItemStyle.list} data-id="">
            <button className={TaskItemStyle.button}>
                <img src={cirlce} className={TaskItemStyle.image} />
            </button>
            <p className={TaskItemStyle.text}>task</p>
        </li>
    );
}
