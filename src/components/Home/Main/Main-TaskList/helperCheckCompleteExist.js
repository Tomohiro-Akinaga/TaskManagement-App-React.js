export default function helperCheckCompleteExist(tasks) {
    const completeTask = [];
    tasks.forEach((item) => {
        completeTask.push(item.complete);
    });
    if (completeTask.includes(true)) {
        return true;
    } else {
        return false;
    }
}
