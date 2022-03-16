import PropTypes from "prop-types";
import cirlce from "../../../../resources/img/circle.png";
import TaskItemStyle from "./TaskItem.module.scss";

function TaskItem({ id, task, complete }) {
    return (
        <li
            className={TaskItemStyle.list}
            data-id={id}
            data-complete={complete}
        >
            <button className={TaskItemStyle.button}>
                <img src={cirlce} className={TaskItemStyle.image} />
            </button>
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
